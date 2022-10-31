/* eslint-disable prettier/prettier */
import { Device } from "src/device/interfaces/device.interface";


export interface Gateway {
  name: string;
  ipv4: string;
  devices: Device[];
}
