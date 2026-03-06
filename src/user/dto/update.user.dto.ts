/* eslint-disable @typescript-eslint/no-unsafe-call */
import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create.user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['password']),
) {}
