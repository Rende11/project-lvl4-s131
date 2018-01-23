import users from './users';
import session from './session';
import welcome from './welcome';

const routes = [users, session, welcome];

export default router => routes.forEach(route => route(router));
