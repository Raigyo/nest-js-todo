import { Test, TestingModule } from '@nestjs/testing';
import { InterceptorsController } from './interceptors.controller';

describe('InterceptorsController', () => {
  let controller: InterceptorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterceptorsController],
    }).compile();

    controller = module.get<InterceptorsController>(InterceptorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
