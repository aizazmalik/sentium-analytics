import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    //Loading typeorm by providing db configurations to be used throughout the application
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '', //fill this with DB IP
      port: 55402,
      username: '', //fill this with DB username
      password: '', //fill this with DB Password
      database: 'aizaz',
      // entities: [Auth],
      synchronize: false,
      autoLoadEntities: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
