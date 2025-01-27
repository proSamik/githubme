import NodeCache from 'node-cache';

// Cache instance with 5 minutes TTL
const cache = new NodeCache({ stdTTL: 300 });

export const getCachedData = async <T>(
  key: string,
  fetchFn: () => Promise<T>
): Promise<T> => {
  const cachedData = cache.get<T>(key);
  if (cachedData) return cachedData;

  const freshData = await fetchFn();
  cache.set(key, freshData);
  return freshData;
};

export const invalidateCache = (key: string) => {
  cache.del(key);
};
