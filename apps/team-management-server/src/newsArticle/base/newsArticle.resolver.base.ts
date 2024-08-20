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
import { NewsArticle } from "./NewsArticle";
import { NewsArticleCountArgs } from "./NewsArticleCountArgs";
import { NewsArticleFindManyArgs } from "./NewsArticleFindManyArgs";
import { NewsArticleFindUniqueArgs } from "./NewsArticleFindUniqueArgs";
import { CreateNewsArticleArgs } from "./CreateNewsArticleArgs";
import { UpdateNewsArticleArgs } from "./UpdateNewsArticleArgs";
import { DeleteNewsArticleArgs } from "./DeleteNewsArticleArgs";
import { NewsArticleService } from "../newsArticle.service";
@graphql.Resolver(() => NewsArticle)
export class NewsArticleResolverBase {
  constructor(protected readonly service: NewsArticleService) {}

  async _newsArticlesMeta(
    @graphql.Args() args: NewsArticleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [NewsArticle])
  async newsArticles(
    @graphql.Args() args: NewsArticleFindManyArgs
  ): Promise<NewsArticle[]> {
    return this.service.newsArticles(args);
  }

  @graphql.Query(() => NewsArticle, { nullable: true })
  async newsArticle(
    @graphql.Args() args: NewsArticleFindUniqueArgs
  ): Promise<NewsArticle | null> {
    const result = await this.service.newsArticle(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => NewsArticle)
  async createNewsArticle(
    @graphql.Args() args: CreateNewsArticleArgs
  ): Promise<NewsArticle> {
    return await this.service.createNewsArticle({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => NewsArticle)
  async updateNewsArticle(
    @graphql.Args() args: UpdateNewsArticleArgs
  ): Promise<NewsArticle | null> {
    try {
      return await this.service.updateNewsArticle({
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

  @graphql.Mutation(() => NewsArticle)
  async deleteNewsArticle(
    @graphql.Args() args: DeleteNewsArticleArgs
  ): Promise<NewsArticle | null> {
    try {
      return await this.service.deleteNewsArticle(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}