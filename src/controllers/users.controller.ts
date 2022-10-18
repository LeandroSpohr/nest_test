import { Controller, Get, Param, Delete, Patch, Query } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import UsersOutput from '../models/dto/output/users.output';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: UsersOutput })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: UsersOutput })
  updateName(@Param('id') id: string, @Query('name') name: string) {
    return this.usersService.updateName(+id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
