import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NewsModuleBase } from "./base/news.module.base";
import { NewsService } from "./news.service";
import { NewsController } from "./news.controller";
import { NewsResolver } from "./news.resolver";

@Module({
  imports: [NewsModuleBase, forwardRef(() => AuthModule)],
  controllers: [NewsController],
  providers: [NewsService, NewsResolver],
  exports: [NewsService],
})
export class NewsModule {}
