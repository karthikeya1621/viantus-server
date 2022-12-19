module.exports = [
    'strapi::errors',
    'strapi::security',
    'strapi::poweredBy',
    {
      name: 'strapi::cors',
      config: {
        enabled: true,
        headers: '*',
        origin: ['http://localhost:1337', 'http://viantus.com', 'https://viantus.com']
      }
    },
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];