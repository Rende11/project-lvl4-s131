// @flow

export default class UserRepository {
  static storage = [];
  static save(user: User) {
    this.storage.push(user);
  }
  static getAllUsers() {
    return this.storage;
  }
}
