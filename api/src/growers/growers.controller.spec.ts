import { Test, TestingModule } from '@nestjs/testing';
import { GrowersController } from './growers.controller';

describe('GrowersController', () => {
  let controller: GrowersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrowersController],
    }).compile();

    controller = module.get<GrowersController>(GrowersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
