import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AthleteServiceBase } from "./base/athlete.service.base";

@Injectable()
export class AthleteService extends AthleteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
