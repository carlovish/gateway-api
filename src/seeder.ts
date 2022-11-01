/* eslint-disable prettier/prettier */
import { seeder } from "nestjs-seeder";
import { MongooseModule } from "@nestjs/mongoose";
import {gatewaySchema } from "./seeders/schemas/gateway.schema";
import { GatewaySeeder } from "./seeders/gateway.seeder";
import { deviceSchema } from "./seeders/schemas/device.schema";


seeder({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/gateway"),
    MongooseModule.forFeature([
      { name: 'Gateway', schema: gatewaySchema },
      { name: 'Device', schema: deviceSchema },
    ]),
  ],
}).run([GatewaySeeder]);