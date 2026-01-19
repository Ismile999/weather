const cache = new Map();

exports.getCache = (key) => {
  const cached = cache.get(key);
  if (!cached) return null;

  if (Date.now() > cached.expiry) {
    cache.delete(key);
    return null;
  }

  return cached.value;
};

exports.setCache = (key, value, ttlMs) => {
  cache.set(key, {
    value,
    expiry: Date.now() + ttlMs
  });
};
