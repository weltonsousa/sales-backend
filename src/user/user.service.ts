import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  // make mock user data
  // private users: UserEntity[] = [];

  // make injetcteble repository
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>, // This should be a repository, but for mock purposes, we use an array
  ) { }

  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    // const user: UserEntity = {
    //   // Generate a unique ID, in a real application this would be handled by the database
    //   id
    //   name: createUserDto.name,
    //   email: createUserDto.email,
    //   password: createUserDto.password, // In a real application, ensure to hash the password
    //   cpf: createUserDto.cpf,
    //   phone: createUserDto.phone || '', // Default to empty string if phone is not provided
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // };

    // Simulate saving the user to a database by pushing it to the mock array
    // this.users.push(user);
    // console.log(`User created: ${JSON.stringify(user)}`);
    this.userRepository
      .save(createUserDto)
      .then(() => {
        console.log(`User saved to database: ${JSON.stringify(createUserDto)}`);
      })
      .catch((error) => {
        console.error('Error saving user to database:', error);
      });
    // Return a promise that resolves to the created user
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(createUserDto as UserEntity); // Simulate async operation
      }, 1000); // Simulate async operation
    });
  }

  findByEmail(email: string): Promise<UserEntity | null> {
    // In a real application, you would query your database for the user by email
    // Here we simulate finding a user by returning null (not found)
    email = email.toLowerCase(); // Normalize email to lowercase
    console.log(`Searching for user with email: ${email}`);
    email = '';
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null); // Simulate no user found
      }, 1000); // Simulate async operation
    });
  }

  getAllUsers(): Promise<UserEntity[]> {
    // In a real application, you would query your database for all users
    // Here we return the mock users array
    console.log('Retrieving all users');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.userRepository.find()); // Simulate fetching all users from the database
      }, 1000); // Simulate async operation
    });
  }
}
