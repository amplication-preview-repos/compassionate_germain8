import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AthleteService } from "./athlete.service";
import { AthleteControllerBase } from "./base/athlete.controller.base";

@swagger.ApiTags("athletes")
@common.Controller("athletes")
export class AthleteController extends AthleteControllerBase {
  constructor(protected readonly service: AthleteService) {
    super(service);
  }
}
