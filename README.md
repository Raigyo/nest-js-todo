# Nest JS To-do application

_ April 2022_

> 🔨 From udemy: [Créer une app FullStack TypeScript avec Angular et NestJS](https://www.udemy.com/course/creer-une-app-fullstack-typescript-avec-angular-et-nestjs).

---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

[http://localhost:3000/](http://localhost:3000/)

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## VSCode : Avoid error _Parsing error: Cannot read file '…/tsconfig.json'.eslint_

Create a .vscode folder in the root project directory and add the following property to the settings.json file inside it:

```ts
{
  "eslint.workingDirectories": [
    "src"
  ]
}
```

## Architecture - core files

### main.ts

Entry point and server creation.

It uses the core function NestFactory to create a Nest application instance.

It includes an async function, which will bootstrap our application.

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

### app.module.ts

The root module of the application.

It encapsulates a controller and a service (provider).

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### app.controller.ts

A basic controller with a single route.

This one add the decorator @Controller (that is a new feature for the class) and a new method get using the decorator @Get. In the constructor we add a service using dependancy injection.

Note : single-responsibility principle (SRP) => a controller only does one task

```ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

### app.service.ts

A basic service with a single method.

We transform the class into a service using @injectable.

The core file add a method returning "Hello World!".

```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

## Architecture - nest generate

Generates and/or modifies files based on a schematic: [nest generate](https://docs.nestjs.com/cli/usages#nest-generate).

### Module

`nest generate module <mymodule>`

`nest g mo <mymodule>`

=> CREATE src/todo/<mymodule>.module.ts

=> UPDATE src/app.module.ts

Ex:

```ts
import { Module } from '@nestjs/common';

@Module({})
export class TodoModule {}
```

Generate a module declaration.

### Controller

`nest generate controller <mycontroller>`

`nest g co <mycontroller>`

Generate a controller declaration, including its associated module and spec (test file).

=> CREATE src/<mymodule>/<mycomponent>.controller.spec.ts

=> CREATE src/<mymodule>/<mycomponent>.controller.ts

=> UPDATE src/<mymodule>/<mycomponent>.module.ts

Ex _<mycomponent>.controller.ts_:

```ts
import { Controller } from '@nestjs/common';

@Controller('todo')
export class TodoController {}
```

Ex _<mycomponent>.module.ts_:

```ts
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController],
})
export class TodoModule {}
```

### Service

`nest generate service <myservice>`

`nest g s <myservice>`

Generate a service declaration.

=> CREATE src/<mymodule>/<myservice>.service.spec.ts

=> CREATE src/<mymodule>/<myservice>.service.ts

=> UPDATE src/<mymodule>/<myservice>.module.ts

Ex:

```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {}
```

### Interface

`nest generate interface <myinterface>`

Generate an interface.

Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.

The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".

Ex:

```ts
export interface Todo {
  id: number;
  title: string;
  done: boolean;
  description?: string;
}
```

### Crud test

### Get

```bash
curl http://localhost:3000/todo

curl http://localhost:3000/todo/2
```

### Post

```bash
curl -d '{"id":4, "title":"test-title", "description":"test-description", "done":false}' -H "Content-Type: application/json" -X POST http://localhost:3000/todo
```

## License

Nest is [MIT licensed](LICENSE).
