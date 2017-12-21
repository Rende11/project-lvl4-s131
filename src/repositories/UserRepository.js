// @flow

export default class UserRepository {
  static storage = [];
  save(user: User) {
    UserRepository.storage.push(user);
  }
  getAllUsers() {
    return UserRepository.storage;
  }
}
