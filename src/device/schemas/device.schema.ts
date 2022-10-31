/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const DeviceSchema = new Schema({
  uid: {
    type: Number,
    unique: true,
    require: true
  },
  vendor:String,
  status:{
    type: String,
    enum:{
        values:['online','offline']
    }
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});
