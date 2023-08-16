import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FirstMiddleware } from './middlewares/firstMiddleware';
import { ConfigModule, ConfigService } from '@nestjs/config';

//const URL="mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder51185"


@Module({
  imports: [UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGO_URL')
      })
    })  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(FirstMiddleware)
    .forRoutes({path: '/api/users', method: RequestMethod.POST})
  }
}
