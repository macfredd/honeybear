import { Test, TestingModule } from '@nestjs/testing';
import { AddressTypeService } from './address-type.service';

describe('AddressTypeService', () => {
  let service: AddressTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressTypeService],
    }).compile();

    service = module.get<AddressTypeService>(AddressTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
