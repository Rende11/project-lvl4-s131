
export default router => {
  router.get('index', '/', async (ctx) => {
    ctx.render('welcome/index');
  });
};
