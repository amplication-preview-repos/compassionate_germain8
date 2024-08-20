/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MeetService } from "../meet.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MeetCreateInput } from "./MeetCreateInput";
import { Meet } from "./Meet";
import { MeetFindManyArgs } from "./MeetFindManyArgs";
import { MeetWhereUniqueInput } from "./MeetWhereUniqueInput";
import { MeetUpdateInput } from "./MeetUpdateInput";
import { ResultFindManyArgs } from "../../result/base/ResultFindManyArgs";
import { Result } from "../../result/base/Result";
import { ResultWhereUniqueInput } from "../../result/base/ResultWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MeetControllerBase {
  constructor(
    protected readonly service: MeetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Meet })
  @nestAccessControl.UseRoles({
    resource: "Meet",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMeet(@common.Body() data: MeetCreateInput): Promise<Meet> {
    return await this.service.createMeet({
      data: {
        ...data,

        season: data.season
          ? {
              connect: data.season,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        date: true,
        id: true,
        location: true,
        name: true,

        season: {
          select: {
            id: true,
          },
        },

        series: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Meet] })
  @ApiNestedQuery(MeetFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Meet",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async meets(@common.Req() request: Request): Promise<Meet[]> {
    const args = plainToClass(MeetFindManyArgs, request.query);
    return this.service.meets({
      ...args,
      select: {
        createdAt: true,
        date: true,
        id: true,
        location: true,
        name: true,

        season: {
          select: {
            id: true,
          },
        },

        series: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Meet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Meet",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async meet(
    @common.Param() params: MeetWhereUniqueInput
  ): Promise<Meet | null> {
    const result = await this.service.meet({
      where: params,
      select: {
        createdAt: true,
        date: true,
        id: true,
        location: true,
        name: true,

        season: {
          select: {
            id: true,
          },
        },

        series: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Meet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Meet",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMeet(
    @common.Param() params: MeetWhereUniqueInput,
    @common.Body() data: MeetUpdateInput
  ): Promise<Meet | null> {
    try {
      return await this.service.updateMeet({
        where: params,
        data: {
          ...data,

          season: data.season
            ? {
                connect: data.season,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          date: true,
          id: true,
          location: true,
          name: true,

          season: {
            select: {
              id: true,
            },
          },

          series: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Meet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Meet",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMeet(
    @common.Param() params: MeetWhereUniqueInput
  ): Promise<Meet | null> {
    try {
      return await this.service.deleteMeet({
        where: params,
        select: {
          createdAt: true,
          date: true,
          id: true,
          location: true,
          name: true,

          season: {
            select: {
              id: true,
            },
          },

          series: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/results")
  @ApiNestedQuery(ResultFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Result",
    action: "read",
    possession: "any",
  })
  async findResults(
    @common.Req() request: Request,
    @common.Param() params: MeetWhereUniqueInput
  ): Promise<Result[]> {
    const query = plainToClass(ResultFindManyArgs, request.query);
    const results = await this.service.findResults(params.id, {
      ...query,
      select: {
        athlete: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        event: true,
        id: true,

        meet: {
          select: {
            id: true,
          },
        },

        place: true,
        time: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/results")
  @nestAccessControl.UseRoles({
    resource: "Meet",
    action: "update",
    possession: "any",
  })
  async connectResults(
    @common.Param() params: MeetWhereUniqueInput,
    @common.Body() body: ResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      results: {
        connect: body,
      },
    };
    await this.service.updateMeet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/results")
  @nestAccessControl.UseRoles({
    resource: "Meet",
    action: "update",
    possession: "any",
  })
  async updateResults(
    @common.Param() params: MeetWhereUniqueInput,
    @common.Body() body: ResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      results: {
        set: body,
      },
    };
    await this.service.updateMeet({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/results")
  @nestAccessControl.UseRoles({
    resource: "Meet",
    action: "update",
    possession: "any",
  })
  async disconnectResults(
    @common.Param() params: MeetWhereUniqueInput,
    @common.Body() body: ResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      results: {
        disconnect: body,
      },
    };
    await this.service.updateMeet({
      where: params,
      data,
      select: { id: true },
    });
  }
}
