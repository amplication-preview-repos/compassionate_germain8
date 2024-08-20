import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NewsService } from "./news.service";
import { NewsControllerBase } from "./base/news.controller.base";

@swagger.ApiTags("news")
@common.Controller("news")
export class NewsController extends NewsControllerBase {
  constructor(
    protected readonly service: NewsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
