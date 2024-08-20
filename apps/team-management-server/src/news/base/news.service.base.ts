/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, News as PrismaNews } from "@prisma/client";
import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { InputJsonValue } from "src/types";
import { FileDownload, FileUpload } from "src/storage/base/storage.types";
import { LocalStorageFile } from "src/storage/providers/local/local.storage.types";

export class NewsServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {}

  async count(args: Omit<Prisma.NewsCountArgs, "select">): Promise<number> {
    return this.prisma.news.count(args);
  }

  async newsItems(args: Prisma.NewsFindManyArgs): Promise<PrismaNews[]> {
    return this.prisma.news.findMany(args);
  }
  async news(args: Prisma.NewsFindUniqueArgs): Promise<PrismaNews | null> {
    return this.prisma.news.findUnique(args);
  }
  async createNews(args: Prisma.NewsCreateArgs): Promise<PrismaNews> {
    return this.prisma.news.create(args);
  }
  async updateNews(args: Prisma.NewsUpdateArgs): Promise<PrismaNews> {
    return this.prisma.news.update(args);
  }
  async deleteNews(args: Prisma.NewsDeleteArgs): Promise<PrismaNews> {
    return this.prisma.news.delete(args);
  }

  async uploadImage<T extends Prisma.NewsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewsFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaNews> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "/";
    const image = await this.localStorageService.uploadFile(
      file,
      [],
      1000000,
      containerPath
    );

    return await this.prisma.news.update({
      where: args.where,

      data: {
        image: image as InputJsonValue,
      },
    });
  }

  async downloadImage<T extends Prisma.NewsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewsFindUniqueArgs>
  ): Promise<FileDownload> {
    const { image } = await this.prisma.news.findUniqueOrThrow({
      where: args.where,
    });

    return await this.localStorageService.downloadFile(
      image as unknown as LocalStorageFile
    );
  }

  async deleteImage<T extends Prisma.NewsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewsFindUniqueArgs>
  ): Promise<PrismaNews> {
    const { image } = await this.prisma.news.findUniqueOrThrow({
      where: args.where,
    });

    await this.localStorageService.deleteFile(
      image as unknown as LocalStorageFile
    );

    return await this.prisma.news.update({
      where: args.where,

      data: {
        image: Prisma.DbNull,
      },
    });
  }
}
