import { Module } from "@nestjs/common";
import { AthleteModuleBase } from "./base/athlete.module.base";
import { AthleteService } from "./athlete.service";
import { AthleteController } from "./athlete.controller";
import { AthleteResolver } from "./athlete.resolver";

@Module({
  imports: [AthleteModuleBase],
  controllers: [AthleteController],
  providers: [AthleteService, AthleteResolver],
  exports: [AthleteService],
})
export class AthleteModule {}
