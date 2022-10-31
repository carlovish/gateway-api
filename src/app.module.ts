import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [
    GatewayModule,
    MongooseModule.forRoot('mongodb://localhost/gateway'),
    DeviceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
