// @flow
export default (router) => {
  router.get('/session', async (ctx) => {
    delete ctx.session.user;
    delete ctx.session.name;
    ctx.redirect('/');
  });
};
