/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Result as PrismaResult,
  Athlete as PrismaAthlete,
  Meet as PrismaMeet,
} from "@prisma/client";

export class ResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ResultCountArgs, "select">): Promise<number> {
    return this.prisma.result.count(args);
  }

  async results(args: Prisma.ResultFindManyArgs): Promise<PrismaResult[]> {
    return this.prisma.result.findMany(args);
  }
  async result(
    args: Prisma.ResultFindUniqueArgs
  ): Promise<PrismaResult | null> {
    return this.prisma.result.findUnique(args);
  }
  async createResult(args: Prisma.ResultCreateArgs): Promise<PrismaResult> {
    return this.prisma.result.create(args);
  }
  async updateResult(args: Prisma.ResultUpdateArgs): Promise<PrismaResult> {
    return this.prisma.result.update(args);
  }
  async deleteResult(args: Prisma.ResultDeleteArgs): Promise<PrismaResult> {
    return this.prisma.result.delete(args);
  }

  async getAthlete(parentId: string): Promise<PrismaAthlete | null> {
    return this.prisma.result
      .findUnique({
        where: { id: parentId },
      })
      .athlete();
  }

  async getMeet(parentId: string): Promise<PrismaMeet | null> {
    return this.prisma.result
      .findUnique({
        where: { id: parentId },
      })
      .meet();
  }
}