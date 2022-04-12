import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { UpperPipe } from '../common/upper.pipe';
import { UpperObjectPipe } from '../common/upper-object.pipe';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { SlugPipe } from '../common/slug.pipe';
import { PipesService } from './pipes.service';

@Controller('pipes')
export class PipesController {
  constructor(private readonly pipesService: PipesService) {}

  // to uppercase
  @Get(':name')
  @UsePipes(UpperPipe)
  getHelloName(@Param('name') name: string): string {
    return this.pipesService.getHelloName(name);
  }

  // to uppercase using object
  @Post()
  @UsePipes(UpperObjectPipe)
  createMessage(@Body() message) {
    return message;
  }

  // casting type string to number
  @Get('articles/:id')
  @UsePipes(ParseIntPipe)
  getArticleById(@Param('id') id) {
    const idType = typeof id;
    // const res = { id: id, idType: idType };
    const res = { id, idType };
    return res;
  }

  // slug
  @Post('articles')
  @UsePipes(SlugPipe)
  createArticle(@Body('title') title, @Body() allBody) {
    // we use title otherwise allBody won't pass the SlugPipe test
    allBody.slug = title;
    return allBody;
  }
}
