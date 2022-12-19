module.exports = {
    settings: {
      cors: {
        enabled: true,
        origin: ["http://localhost", "https://viantus.com", "https://www.viantus.com", "http://viantus.com", "http://www.viantus.com"]
      },
      customMiddleware: {
        enabled: true
      }
    },
  };