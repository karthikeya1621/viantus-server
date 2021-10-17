module.exports = ({ env }) => ({
  port: env.int("PORT", 80),
});
