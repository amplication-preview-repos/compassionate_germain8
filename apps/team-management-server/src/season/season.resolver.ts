import * as graphql from "@nestjs/graphql";
import { SeasonResolverBase } from "./base/season.resolver.base";
import { Season } from "./base/Season";
import { SeasonService } from "./season.service";

@graphql.Resolver(() => Season)
export class SeasonResolver extends SeasonResolverBase {
  constructor(protected readonly service: SeasonService) {
    super(service);
  }
}
