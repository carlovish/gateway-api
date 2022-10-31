import { CreategatewayDTO } from './dto/gateway.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gateway } from './interfaces/gateway.interface';

@Injectable()
export class GatewayService {
  constructor(@InjectModel('Gateway') private gatewayModel: Model<Gateway>) {}

  async getGateways(): Promise<Gateway[]> {
    const gateways = await this.gatewayModel.find();
    return gateways;
  }

  async getGateway(gatewayID: string): Promise<Gateway> {
    const gateway = await this.gatewayModel.findById(gatewayID);
    return gateway;
  }
  async createGateway(creategatewayDTO: CreategatewayDTO) {
    const gateway = new this.gatewayModel(creategatewayDTO);
    await gateway.save();
  }

  async deleteGateway(gatewayID: string) {
    await this.gatewayModel.findByIdAndDelete(gatewayID);
  }

  async updateGateway(gatewayID: string, creategatewayDTO: CreategatewayDTO) {
    await this.gatewayModel.findByIdAndUpdate(gatewayID, creategatewayDTO);
  }
}
