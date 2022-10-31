import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeviceDTO } from './dto/device.dto';
import { Device } from './interfaces/device.interface';

@Injectable()
export class DeviceService {
  constructor(@InjectModel('Device') private deviceModel: Model<Device>) {}

  async getDevices(): Promise<Device[]> {
    const devices = await this.deviceModel.find();
    return devices;
  }

  async getDevice(deviceID: string): Promise<Device> {
    const device = await this.deviceModel.findById(deviceID);
    return device;
  }
  async createDevice(createDeviceDTO: CreateDeviceDTO) {
    const device = new this.deviceModel(createDeviceDTO);
    //console.log(device);
    await device.save();
  }

  async deleteDevice(deviceID: string) {
    await this.deviceModel.findByIdAndDelete(deviceID);
  }

  async updateDevice(deviceID: string, createDeviceDTO: CreateDeviceDTO) {
    await this.deviceModel.findByIdAndUpdate(deviceID, createDeviceDTO);
  }
}
