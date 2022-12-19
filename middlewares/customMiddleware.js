module.exports = strapi => {
    return {
        initialize() {
            strapi.app.use(async (ctx, next) => {
                ctx.response.set('Access-Control-Allow-Origin', '*');
                await next();
            });
        },
    };
};
