/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Athlete } from "./Athlete";
import { AthleteCountArgs } from "./AthleteCountArgs";
import { AthleteFindManyArgs } from "./AthleteFindManyArgs";
import { AthleteFindUniqueArgs } from "./AthleteFindUniqueArgs";
import { CreateAthleteArgs } from "./CreateAthleteArgs";
import { UpdateAthleteArgs } from "./UpdateAthleteArgs";
import { DeleteAthleteArgs } from "./DeleteAthleteArgs";
import { ResultFindManyArgs } from "../../result/base/ResultFindManyArgs";
import { Result } from "../../result/base/Result";
import { AthleteService } from "../athlete.service";
@graphql.Resolver(() => Athlete)
export class AthleteResolverBase {
  constructor(protected readonly service: AthleteService) {}

  async _athletesMeta(
    @graphql.Args() args: AthleteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Athlete])
  async athletes(
    @graphql.Args() args: AthleteFindManyArgs
  ): Promise<Athlete[]> {
    return this.service.athletes(args);
  }

  @graphql.Query(() => Athlete, { nullable: true })
  async athlete(
    @graphql.Args() args: AthleteFindUniqueArgs
  ): Promise<Athlete | null> {
    const result = await this.service.athlete(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Athlete)
  async createAthlete(
    @graphql.Args() args: CreateAthleteArgs
  ): Promise<Athlete> {
    return await this.service.createAthlete({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Athlete)
  async updateAthlete(
    @graphql.Args() args: UpdateAthleteArgs
  ): Promise<Athlete | null> {
    try {
      return await this.service.updateAthlete({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Athlete)
  async deleteAthlete(
    @graphql.Args() args: DeleteAthleteArgs
  ): Promise<Athlete | null> {
    try {
      return await this.service.deleteAthlete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Result], { name: "results" })
  async findResults(
    @graphql.Parent() parent: Athlete,
    @graphql.Args() args: ResultFindManyArgs
  ): Promise<Result[]> {
    const results = await this.service.findResults(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}