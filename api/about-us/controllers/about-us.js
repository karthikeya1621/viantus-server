const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  async find(ctx) {
    const entity = await strapi.services['about-us'].find();
    ctx.set('Access-Control-Allow-Origin', '*');
    return sanitizeEntity(entity, { model: strapi.models['about-us'] });
  },
};
