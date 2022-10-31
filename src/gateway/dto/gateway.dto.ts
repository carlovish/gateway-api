/* eslint-disable prettier/prettier */

import { CreateDeviceDTO } from 'src/device/dto/device.dto';
export class CreategatewayDTO {
  name: string;
  ipv4: string;
  devices: CreateDeviceDTO[];
}
