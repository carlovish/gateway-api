/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';
import { DeviceSchema } from 'src/device/schemas/device.schema';


export const GatewaySchema = new Schema({
  name: String,
  ipv4: {
    type:String,
    validate: {
      validator: function(v){
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v);
      },
      message: props=>`${props.value} is not a valid IPV4 address!`
    }
  },
  devices: {
    type: [DeviceSchema],
    validate: [(v)=>{return v.length<=10},`{PATH} exceeds the limit of 10`]
  },
});
