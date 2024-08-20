import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeetServiceBase } from "./base/meet.service.base";

@Injectable()
export class MeetService extends MeetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
