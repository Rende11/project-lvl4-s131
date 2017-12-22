import users from './users';
import session from './session';

const routes = [users, session];

export default (router) => routes.forEach(route => route(router)) ;
