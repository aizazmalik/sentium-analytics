import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { UsersDto } from './dto/users.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //This function will take email and password as input and will generate a token in return if authentication is successful
  @Post('token')
  generateToken(@Body() authDto: AuthDto) {
    return this.authService.generateToken(authDto);
  }

  //This function will return all users present in the database
  //Guards will act as middleware for authenticating whether the token provided in request is valid or not
  @UseGuards(JwtAuthGuard)
  @Get('users')
  getAllUsers() {
    return this.authService.getAllUsers();
  }

  //This function will create a new user in database
  //Guards will act as middleware for authenticating whether the token provided in request is valid or not
  @UseGuards(JwtAuthGuard)
  @Get('signup')
  createNewUser(@Body() usersDto: UsersDto) {
    return this.authService.createNewUser(usersDto);
  }
}
