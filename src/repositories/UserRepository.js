// @flow

import crypto from '../utilities/encrypt';
import User from '../db/';

export default class UserRepository {
  static async save(user: User) {
    await User.sync();
    await User.create({ ...user, state: 'active' });
  }

  static async getAllUsers() {
    const users = await User.findAll();
    const preparedUsersData = users.map(user => user.dataValues).filter(user => user.state === 'active');
    return preparedUsersData;
  }

  static async getUserId(uid) {
    const [user] = await User.findAll({
      where: {
        uid,
      },
    });
    return user.dataValues.id;
  }

  static async findUserByUid(uid) {
    const [user] = await User.findAll({
      where: {
        uid,
      },
    });
    return user.dataValues;
  }

  static async findUserById(id) {
    const user = await User.findById(id);
    return user.dataValues;
  }

  static async updateUser(uid, newFields) {
    const [user] = await User.findAll({
      where: {
        uid,
      },
    });
    const { newFirstname, newLastname, newPassword } = newFields;

    await user.update({
      firstName: newFirstname,
      lastName: newLastname,
      password: crypto(newPassword),
    });
  }

  static async find(email: string, password: string) {
    const [user] = await User.findAll({
      where: {
        email,
        password: crypto(password),
        state: 'active',
      },
    });
    return user;
  }

  static async remove(id) {
    const user = await User.findById(id);
    await user.update({
      state: 'deleted',
    });
  }
}
