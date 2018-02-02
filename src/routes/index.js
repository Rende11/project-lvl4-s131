import users from './users';
import session from './session';
import welcome from './welcome';
import tasks from './tasks';
import statuses from './statuses';

const routes = [users, session, welcome, tasks, statuses];

export default router => routes.forEach(route => route(router));
