// @flow

export default class UserRepository {
  storage = [];
  save(user: User) {
    this.storage.push(user);
  }
  getAllUsers() {
    return this.storage;
  }
}
