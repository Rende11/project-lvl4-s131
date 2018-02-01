import users from './users';
import session from './session';
import welcome from './welcome';
import tasks from './tasks';

const routes = [users, session, welcome, tasks];

export default router => routes.forEach(route => route(router));
