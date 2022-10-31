import { GatewaySchema } from './schemas/gateway.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { DeviceSchema } from 'src/device/schemas/device.schema';
import { DeviceService } from 'src/device/device.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Gateway', schema: GatewaySchema },
      { name: 'Device', schema: DeviceSchema },
    ]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService, DeviceService],
})
export class GatewayModule {}
