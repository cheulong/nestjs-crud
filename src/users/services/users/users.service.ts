import { CreateUserType } from './../../../utils/user.type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'Anson', email: 'a@a.com' }];

  fetchUser() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
}
