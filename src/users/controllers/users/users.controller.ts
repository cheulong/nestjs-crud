import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth.guard';
import { ValidateUserPipe } from 'src/users/pipes/validate-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.fetchUser();
  }

  @Get('posts')
  getUserPosts() {
    return [{ username: 'Anson', email: 'a@a.com', posts: [] }];
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateUserPipe) userInfo: CreateUserDto) {
    console.log(userInfo);

    this.usersService.createUser(userInfo);
  }
}
