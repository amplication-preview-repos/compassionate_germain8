import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeetService } from "./meet.service";
import { MeetControllerBase } from "./base/meet.controller.base";

@swagger.ApiTags("meets")
@common.Controller("meets")
export class MeetController extends MeetControllerBase {
  constructor(protected readonly service: MeetService) {
    super(service);
  }
}
