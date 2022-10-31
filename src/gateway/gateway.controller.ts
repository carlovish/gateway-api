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

@Controller('gateways')
export class GatewayController {
  constructor(
    private gatewayService: GatewayService,
    private deviceService: DeviceService,
  ) {}

  @Post('/create')
  async createGateway(@Res() res, @Body() createGatewayDTO: CreategatewayDTO) {
    try {
      this.createDevices(createGatewayDTO);
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
    return res.status(HttpStatus.OK).json({
      gateways,
    });
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

  async createDevices(createGatewayDTO: CreategatewayDTO) {
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
  }
}
