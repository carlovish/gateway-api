/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Device extends Document{
    @Prop()
    uid: number;

    @Prop()
    vendor: string;

    @Prop()
    status: string;

    @Prop()
    cretedAT: Date;
}

export const deviceSchema = SchemaFactory.createForClass(Device);