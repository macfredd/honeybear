import { Test, TestingModule } from '@nestjs/testing';
import { AddressTypeController } from './address-type.controller';

describe('AddressTypeController', () => {
  let controller: AddressTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressTypeController],
    }).compile();

    controller = module.get<AddressTypeController>(AddressTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
