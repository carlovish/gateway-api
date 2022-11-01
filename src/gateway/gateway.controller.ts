import { CreategatewayDTO } from './dto/gateway.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { DeviceService } from 'src/device/device.service';
import { CreateDeviceDTO } from 'src/device/dto/device.dto';

@Controller('gateways')
export class GatewayController {
  constructor(
    private gatewayService: GatewayService,
    private deviceService: DeviceService,
  ) {}

  @Post('/')
  async createGateway(@Res() res, @Body() createGatewayDTO: CreategatewayDTO) {
    try {
      //this.createDevices(createGatewayDTO);
      await this.gatewayService.createGateway(createGatewayDTO);

      return res.status(HttpStatus.OK).json({
        message: 'Gateway created succesfully!!!',
      });
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: e.message,
      });
    }
  }

  @Get('/')
  async getGateways(@Res() res) {
    const gateways = await this.gatewayService.getGateways();
    return res.status(HttpStatus.OK).json(gateways);
  }

  @Get('/:gatewayID')
  async getGateway(@Res() res, @Param('gatewayID') gatewayID) {
    const gateway = await this.gatewayService.getGateway(gatewayID);
    if (!gateway) throw new NotFoundException('Gateway does not exist');

    return res.status(HttpStatus.OK).json(gateway);
  }

  @Delete('/:gatewayID')
  async deleteGateway(@Res() res, @Param('gatewayID') gatewayID) {
    await this.gatewayService.deleteGateway(gatewayID);
    return res.status(HttpStatus.OK).json({
      message: 'Gateway deleted succesfully!!!',
    });
  }

  @Put('/:gatewayID')
  async updateGateway(
    @Res() res,
    @Param('gatewayID') gatewayID,
    @Body() createGatewayDTO: CreategatewayDTO,
  ) {
    await this.gatewayService.updateGateway(gatewayID, createGatewayDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Gateway updated succesfully!!!',
    });
  }

  @Post('/:gatewayID/device')
  async addDevice(
    @Res() res,
    @Param('gatewayID') gatewayID,
    @Body() createDeviceDTO: CreateDeviceDTO,
  ) {
    const gateway = await this.gatewayService.getGateway(gatewayID);
    let { devices } = gateway;
    devices = [...devices, createDeviceDTO];
    gateway.devices = devices;
    await this.gatewayService.updateGateway(gatewayID, gateway);
    return res.status(HttpStatus.OK).json({
      message: 'Device added succesfully!!!',
    });
  }

  @Delete('/:gatewayID/device/:uid')
  async removeDevice(
    @Res() res,
    @Param('gatewayID') gatewayID,
    @Param('uid') uid,
  ) {
    const gateway = await this.gatewayService.getGateway(gatewayID);
    let { devices } = gateway;
    devices = devices.filter((d) => d.uid != uid);
    gateway.devices = devices;
    await this.gatewayService.updateGateway(gatewayID, gateway);
    return res.status(HttpStatus.OK).json({
      message: 'Device removed succesfully!!!',
    });
  }

  @Put('/:gatewayID/device/:uid')
  async updateDevice(
    @Res() res,
    @Param('gatewayID') gatewayID,
    @Param('uid') uid,
    @Body() createDeviceDTO: CreateDeviceDTO,
  ) {
    const gateway = await this.gatewayService.getGateway(gatewayID);
    const { devices } = gateway;
    const index = devices.findIndex((d) => d.uid == createDeviceDTO.uid);
    devices[index] = createDeviceDTO;
    gateway.devices = devices;
    await this.gatewayService.updateGateway(gatewayID, gateway);
    return res.status(HttpStatus.OK).json({
      message: 'Device updated succesfully!!!',
    });
  }

  /*async createDevices(createGatewayDTO: CreategatewayDTO) {
    const { devices } = createGatewayDTO;
    for (const device of devices) {
      try {
        await this.deviceService.createDevice(device);
      } catch (e) {
        return {
          message: e.message,
        };
      }
    }
  }*/
}
