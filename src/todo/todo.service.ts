import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
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
  create(todo: CreateTodoDto) {
    this.todo = [...this.todo, todo];
  }
  update(id: string, todo: CreateTodoDto) {
    // +id => number(id)
    const todoToUpdate = this.todo.find((t) => t.id === +id);
    if (!todo) {
      return new NotFoundException('Id not found!');
    }
    // granular update: we can update one or several elements
    // we use hasOwnProperty otherwise with todo.done, it will always be false
    if (todo.hasOwnProperty('done')) {
      todoToUpdate.done = todo.done;
    }
    if (todo.title) {
      todoToUpdate.title = todo.title;
    }
    if (todo.description) {
      todoToUpdate.description = todo.description;
    }
    // if id is different we don't update, otherwise we update it
    const updatedTodo = this.todo.map((t) => (t.id !== +id ? t : todoToUpdate));
    this.todo = [...updatedTodo];
    return { updatedTodo: 1, todo: todoToUpdate };
  }
  delete(id: string) {
    const nbOfTodoBeforeDelete = this.todo.length;
    // we keed id's that are different from ther one sent as argument
    this.todo = [...this.todo.filter((t) => t.id !== +id)];
    if (this.todo.length < nbOfTodoBeforeDelete) {
      return { deletedTodo: 1, nbTodo: this.todo.length };
    } else {
      return { deletedTodo: 0, nbTodo: this.todo.length };
    }
  }
}
