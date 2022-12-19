module.exports = strapi => {
    return {
        initialize() {
            strapi.app.use(async (ctx, next) => {
                ctx.response.set('Access-Control-Allow-Origin', '*');
                console.log(ctx.request.url , "CORS Header Set");
                await next();
            });
        },
    };
};
