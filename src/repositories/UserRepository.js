// @flow

import crypto from '../utilities/encrypt';
import entity from '../entities/User';
import connect from '../db/';

const User = entity(connect);

const syncDb = async user => user.sync();

syncDb(User);

export default class UserRepository {
  static async create(user) {
    const record = await User.create(user);
    return record.get({ plain: true });
  }

  static async getAllUsers() {
    const users = await User.findAll();
    const preparedUsersData = users.map(user => user.dataValues).filter(user => user.state === 'active');
    return preparedUsersData;
  }

  static async findUserById(id) {
    const user = await User.findById(id);
    if (user) {
      return user.dataValues;
    }
    throw new Error('User doesn\'t exists');
  }

  static async updateUser(id, newFields) {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User doesn\'t exists');
    }
    const { newFirstname, newLastname, newPassword } = newFields;

    await user.update({
      firstName: newFirstname,
      lastName: newLastname,
      password: newPassword,
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
