import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //returning a string just to give a hello message for handshake
  getHello(): string {
    return 'API Server is up and running!';
  }
}
