// @flow

import uuid from 'uuid-js';

export default class User {
  constructor(firstName: string, lastName: string, email: string, password: string) {
    this.uid = uuid.create().hex;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
