import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  // Inject UserService if needed
  constructor(private readonly userService: UserService) { }
  @Get('/')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post('')
  async createUser(@Body() createUserDto: CreateUserDto) {
    // Validate the input data
    if (
      !createUserDto.name ||
      !createUserDto.email ||
      !createUserDto.password
    ) {
      throw new Error('Name, email, and password are required fields.');
    }
    // Check if the email is already registered
    const existingUser = await this.userService.findByEmail(
      createUserDto.email,
    );
    if (existingUser) {
      throw new Error('Email already registered.');
    }
    //create password bycrpt hashing
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

    console.log('Hashed password:', hash);
    createUserDto.password = hash;
    this.userService
      .createUser(createUserDto)
      .then((user) => {
        console.log('User created:', user);
        return user;
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        throw error; // Handle the error appropriately
      });
    return JSON.stringify(createUserDto);
  }
}
