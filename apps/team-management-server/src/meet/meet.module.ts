import { Module } from "@nestjs/common";
import { MeetModuleBase } from "./base/meet.module.base";
import { MeetService } from "./meet.service";
import { MeetController } from "./meet.controller";
import { MeetResolver } from "./meet.resolver";

@Module({
  imports: [MeetModuleBase],
  controllers: [MeetController],
  providers: [MeetService, MeetResolver],
  exports: [MeetService],
})
export class MeetModule {}
