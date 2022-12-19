module.exports = strapi => {
    return {
        initialize() {
            strapi.app.use(async (ctx, next) => {
                await next();
                ctx.set('Access-Control-Allow-Origin', '*');
            });
        },
    };
};
