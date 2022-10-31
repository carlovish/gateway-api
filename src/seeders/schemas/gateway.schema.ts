/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Gateway extends Document{
    @Prop()
    name: string;

    @Prop()
    ipv4: string;

    @Prop()
    devices: [];
}

export const gatewaySchema = SchemaFactory.createForClass(Gateway);