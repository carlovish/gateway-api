/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Seeder } from "nestjs-seeder";
import { Gateway } from "./schemas/gateway.schema";

@Injectable()
export class GatewaySeeder implements Seeder{
    constructor(@InjectModel('Gateway') private readonly gateway: Model<Gateway>){}
    
    async seed(): Promise<any>{
        const gateways=[
            {
                name:'G-00001',
                ipv4:'192.168.1.1',
                devices:[
                    {
                        uid:1,
                        vendor:'A',
                        status:'online',
                        createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
                    }
                ]
            },
            {
                name:'G-00002',
                ipv4:'192.168.1.2',
                devices:[
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
                ]
            },
            {
                name:'G-00003',
                ipv4:'192.168.1.3',
                devices:[
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
                ]
            },
            {
                name:'G-00004',
                ipv4:'192.168.1.4',
                devices:[
                    {
                        uid:8,
                        vendor:'H',
                        status:'offline',
                        createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
                    },
                    {
                        uid:9,
                        vendor:'I',
                        status:'online',
                        createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
                    },
                    {
                        uid:10,
                        vendor:'J',
                        status:'offline',
                        createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
                    },
                ]
            },
            {
                name:'G-00005',
                ipv4:'192.168.1.5',
                devices:[
                    {
                        uid:11,
                        vendor:'K',
                        status:'offline',
                        createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
                    },
                    {
                        uid:12,
                        vendor:'L',
                        status:'online',
                        createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
                    },
                    {
                        uid:13,
                        vendor:'M',
                        status:'offline',
                        createdAT:this.randomDate(new Date(2022, 0, 1), new Date(), 0, 24)
                    },
                ]
            },
        ]
        return this.gateway.insertMany(gateways)
    }

    async drop(): Promise<any> {
        return this.gateway.deleteMany({});
      }

    randomDate(start, end, startHour, endHour) {
        const date = new Date(+start + Math.random() * (end - start));
        const hour = startHour + Math.random() * (endHour - startHour) | 0;
        date.setHours(hour);
        return date;
      }
}