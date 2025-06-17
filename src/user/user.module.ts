import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entities';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], // Specify your entities here if using TypeORM
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
