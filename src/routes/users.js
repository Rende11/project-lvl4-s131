// @flow

export default (router) => {
  router.get('/user/new', async (ctx) => {
    ctx.render('users/index');
  });
};
