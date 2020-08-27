const fetchTimeout = (url, options = {}) => {
  let { timeout = 50000, ...rest } = options;
  if (rest.signal) throw new Error('Signal not supported in timeoutable fetch');
  const controller = new AbortController();
  const { signal } = controller;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Timeout for Promise'));
      controller.abort();
    }, timeout);
    fetch(url, { signal, ...rest })
      .finally(() => clearTimeout(timer))
      .then(resolve, reject);
  });
};

export default fetchTimeout;
