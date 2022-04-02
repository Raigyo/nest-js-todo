import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todo')
export class TodoController {
  // injector provides an instance of TodoService using a private accessor
  constructor(private readonly todoService: TodoService) {}

  @Get(':id')
  // :id dynamic value
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }
  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }
  @Post()
  //@Body: req.body / req.body[param]
  createTodo(@Body() newTodo) {
    this.todoService.create(newTodo);
  }
}
