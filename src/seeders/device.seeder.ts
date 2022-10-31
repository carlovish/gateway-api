/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Seeder } from "nestjs-seeder";
import { Device } from "./schemas/device.schema";

@Injectable()
export class DeviceSeeder implements Seeder{
    constructor(@InjectModel('Device') private readonly device: Model<Device>){}

    async seed(): Promise<any>{
        const devices=[
            {
                uid:1,
                vendor:'A',
                status:'online',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:2,
                vendor:'B',
                status:'offline',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:3,
                vendor:'C',
                status:'online',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:4,
                vendor:'D',
                status:'offline',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:5,
                vendor:'E',
                status:'online',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:6,
                vendor:'F',
                status:'offline',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:7,
                vendor:'G',
                status:'online',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:8,
                vendor:'H',
                status:'offline',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:9,
                vendor:'I',
                status:'offline',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:10,
                vendor:'J',
                status:'offline',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:11,
                vendor:'K',
                status:'online',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:12,
                vendor:'L',
                status:'offline',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
            {
                uid:13,
                vendor:'M',
                status:'offline',
                createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
            },
        ];

        return this.device.insertMany(devices);
    }

    async drop(): Promise<any> {
        return this.device.deleteMany({});
      }
    
    randomDate(start, end, startHour, endHour) {
    const date = new Date(+start + Math.random() * (end - start));
    const hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
    }
    

}