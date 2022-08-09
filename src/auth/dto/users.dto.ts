//a dto class for taking input for creating the user, all information in request input will be validated against the types specified here
export class UsersDto {
  id: Number = 0;
  email: string;
  password: string;
  created_on: Date;
}
