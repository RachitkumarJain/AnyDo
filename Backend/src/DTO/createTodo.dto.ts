import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @MaxLength(15, { message: 'Exceeded Max Length(15)' })
  title: string;

  @IsNotEmpty()
  description: string;
}
