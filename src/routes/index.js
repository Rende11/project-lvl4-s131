import users from './users';
import session from './sessions';
import welcome from './welcome';
import tasks from './tasks';
import statuses from './statuses';
import filters from './filters';

const routes = [users, session, welcome, tasks, statuses, filters];

export default router => routes.forEach(route => route(router));
