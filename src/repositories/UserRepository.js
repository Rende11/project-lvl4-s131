// @flow

import crypto from '../utilities/encrypt';
import entity from '../entities/User';
import connect from '../db/';

const User = entity(connect);

export default class UserRepository {
  static async save(user) {
    // await User.sync();
    return await User.build(user);
  }

  static async getAllUsers() {
    await User.sync();
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
