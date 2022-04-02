import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
  todo: Todo[] = [
    {
      id: 1,
      title: 'todo app',
      description: 'Create NestJS todos app',
      done: false,
    },
    {
      id: 2,
      title: 'bread',
      description: 'Buy bread',
      done: true,
    },
    {
      id: 3,
      title: 'wine',
      description: 'Buy wine',
      done: false,
    },
  ];
  findOne(id: string) {
    return this.todo.find((todo) => todo.id === Number(id));
  }
  findAll(): Todo[] {
    return this.todo;
  }
  create(todo: Todo) {
    this.todo = [...this.todo, todo];
  }
}
