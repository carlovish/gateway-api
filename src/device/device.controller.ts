import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDTO } from './dto/device.dto';

@Controller('devices')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Post('/create')
  async createDevice(@Res() res, @Body() createDeviceDTO: CreateDeviceDTO) {
    try {
      await this.deviceService.createDevice(createDeviceDTO);

      return res.status(HttpStatus.OK).json({
        message: 'Device created succesfully!!!',
      });
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: e.message,
      });
    }
  }

  @Get('/')
  async getDevices(@Res() res) {
    const devices = await this.deviceService.getDevices();
    return res.status(HttpStatus.OK).json({
      devices,
    });
  }

  @Get('/:deviceID')
  async getDevice(@Res() res, @Param('deviceID') deviceID) {
    const device = await this.deviceService.getDevice(deviceID);
    return res.status(HttpStatus.OK).json({
      device,
    });
  }

  @Delete('/:deviceID')
  async deleteDevice(@Res() res, @Param('deviceID') deviceID) {
    await this.deviceService.deleteDevice(deviceID);
    return res.status(HttpStatus.OK).json({
      message: 'Devie deleted succesfully!!',
    });
  }

  @Put('/:deviceID')
  async updateDevice(
    @Res() res,
    @Param('deviceID') deviceID,
    @Body() createDeviceDTO: CreateDeviceDTO,
  ) {
    await this.deviceService.updateDevice(deviceID, createDeviceDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Devie deleted succesfully!!',
    });
  }
}
