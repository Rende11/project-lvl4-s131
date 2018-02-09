export default (router) => {
  router.get('welcomeIndex', '/', async (ctx) => {
    ctx.render('welcome/index');
  });
};
