// @flow

import crypto from '../utilities/encrypt';

export default class UserRepository {
  static storage = [];
  static save(user: User) {
    this.storage.push(user);
  }
  static getAllUsers() {
    return this.storage;
  }
  static getUserId(uid) {
    return this.storage.findIndex(user => user.uid === uid);
  }
  static find(email: string, password: string) {
    return this.storage.find(user => user.email === email && user.password === crypto(password));
  }
}
