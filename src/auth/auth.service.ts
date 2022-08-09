import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { Users } from './entities/users.entity';
import _ = require('lodash');
import { JwtService } from '@nestjs/jwt';
import { UsersDto } from './dto/users.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<typeof Users>,
    private dataSource: DataSource,
    private jwtService: JwtService,
  ) {}

  //generating a JWT token after verifying username and password from DB
  async generateToken(authDto: AuthDto) {
    // return this.usersRepository.find();

    let authResponse = await this.usersRepository.find({
      where: {
        email: authDto.email,
        password: authDto.password,
      } as unknown,
    });

    if (!_.isEmpty(authResponse)) {
      return {
        access_token: this.jwtService.sign(authDto),
      };
    } else {
      return 'no token';
    }
  }

  //returning all users present in db
  async getAllUsers() {
    return this.usersRepository.find();
  }

  //creating a new user in db
  async createNewUser(usersDto: UsersDto) {
    //getting new id from sequence for insertion in table
    const userIdData = await this.dataSource.manager.query(
      `select nextval('users_seq')`,
    );

    //getting current date for insertion in db
    const date = new Date();

    let userId = userIdData[0]['nextval'];

    //saving date and id in pre created dto
    usersDto.id = userId;
    usersDto.created_on = date;

    let insertResponse = this.usersRepository.save(usersDto as unknown);

    return insertResponse;
  }
}
