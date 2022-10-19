import { Injectable } from '@nestjs/common';

import UserEntity from '../entities/user.entity';
import UsersOutput from '../dto/output/users.output';

@Injectable()
export default class UsersConverter {
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
