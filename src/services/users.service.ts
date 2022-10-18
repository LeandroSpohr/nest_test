import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import UserEntity from '../models/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

import UsersOutput from '../models/dto/output/users.output';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    const userEntity = await this.userRepo.findOne({ where: { id } });

    const userOutput = new UsersOutput();

    userOutput.id = userEntity.id;
    userOutput.name = userEntity.name;
    userOutput.active = userEntity.active;
    userOutput.createdAt = userEntity.createdAt;
    userOutput.updatedAt = userEntity.updatedAt;

    return userOutput;
  }

  async updateName(id: number, name: string) {
    const userEntity = await this.userRepo.findOne({ where: { id } });

    userEntity.name = name;

    const userSaved = await this.userRepo.save(userEntity);

    const userOutput = new UsersOutput();

    userOutput.id = userSaved.id;
    userOutput.name = userSaved.name;
    userOutput.active = userSaved.active;
    userOutput.createdAt = userSaved.createdAt;
    userOutput.updatedAt = userSaved.updatedAt;

    return userOutput;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
