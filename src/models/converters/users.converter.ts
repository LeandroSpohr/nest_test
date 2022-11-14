import { Injectable } from '@nestjs/common';

import UserEntity from '../entities/user.entity';
import UsersOutput from '../dto/output/users.output';
import UsersInput from '../dto/input/users.input';

@Injectable()
export default class UsersConverter {
  inputToEntity(input: UsersInput, entity: UserEntity) {
    entity.id = input.id;
    entity.name = input.name;
    entity.password = input.password;
    entity.active = input.active;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }

  entityToOutput(entity: UserEntity): UsersOutput {
    const output = new UsersOutput();

    output.id = entity.id;
    output.name = entity.name;
    output.active = entity.active;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;

    return output;
  }
}
