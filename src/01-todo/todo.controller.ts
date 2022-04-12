import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

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
  createTodo(@Body() newTodo: CreateTodoDto) {
    return this.todoService.create(newTodo);
  }
  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto) {
    return this.todoService.update(id, todo);
  }
  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
