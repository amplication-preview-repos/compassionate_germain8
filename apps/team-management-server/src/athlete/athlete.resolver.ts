import * as graphql from "@nestjs/graphql";
import { AthleteResolverBase } from "./base/athlete.resolver.base";
import { Athlete } from "./base/Athlete";
import { AthleteService } from "./athlete.service";

@graphql.Resolver(() => Athlete)
export class AthleteResolver extends AthleteResolverBase {
  constructor(protected readonly service: AthleteService) {
    super(service);
  }
}
