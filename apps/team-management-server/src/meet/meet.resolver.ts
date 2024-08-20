import * as graphql from "@nestjs/graphql";
import { MeetResolverBase } from "./base/meet.resolver.base";
import { Meet } from "./base/Meet";
import { MeetService } from "./meet.service";

@graphql.Resolver(() => Meet)
export class MeetResolver extends MeetResolverBase {
  constructor(protected readonly service: MeetService) {
    super(service);
  }
}
