const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  async find(ctx) {
    const entity = await strapi.services['home-page'].find();
    ctx.set('Access-Control-Allow-Origin', '*');
    return sanitizeEntity(entity, { model: strapi.models['home-page'] });
  },
};
