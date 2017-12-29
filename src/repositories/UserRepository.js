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
    return this.storage.findIndex(user => user.uid === uid) + 1;
  }

  static findUserByUid(uid) {
    return this.storage.find(user => user.uid === uid);
  }

  static findUserById(id) {
    return this.storage[id - 1];
  }

  static updateUser(uid, newFields) {
    const user = this.storage.find(u => u.uid === uid);
    const { newFirstname, newLastname, newPassword } = newFields;
    user.firstName = newFirstname;
    user.lastName = newLastname;
    user.password = crypto(newPassword);
  }
  static find(email: string, password: string) {
    return this.storage.find(user => user.email === email && user.password === crypto(password));
  }

  static remove(uid) {
    const index = this.storage.findIndex(user => user.uid === uid);
    this.storage.splice(index, 1);
  }
}
