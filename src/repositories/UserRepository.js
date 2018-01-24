// @flow

import crypto from '../utilities/encrypt';
import { User } from '../models';

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
    if (!user) {
      throw new Error('User doesn\'t exists');
    }
    return user.dataValues;
  }

  static async updateUser(id, newFields) {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User doesn\'t exists');
    }

    const { newFirstname, newLastname, newEmail } = newFields;

    await user.update({
      firstName: newFirstname,
      lastName: newLastname,
      email: newEmail,
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
