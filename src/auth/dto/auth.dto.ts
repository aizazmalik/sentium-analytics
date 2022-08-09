//a dto class for taking input for verifying login and generating jwt token, all information in request input will be validated against the types specified here
export class AuthDto {
  email: string;
  password: string;
}
