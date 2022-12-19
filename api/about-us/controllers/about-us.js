const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  async find(ctx) {
    const entity = await strapi.services.aboutUs.find();
    ctx.set('Access-Control-Allow-Origin', '*');
    return sanitizeEntity(entity, { model: strapi.models.aboutUs });
  },
};
