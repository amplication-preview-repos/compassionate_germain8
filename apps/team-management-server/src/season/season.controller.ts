import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SeasonService } from "./season.service";
import { SeasonControllerBase } from "./base/season.controller.base";

@swagger.ApiTags("seasons")
@common.Controller("seasons")
export class SeasonController extends SeasonControllerBase {
  constructor(protected readonly service: SeasonService) {
    super(service);
  }
}
