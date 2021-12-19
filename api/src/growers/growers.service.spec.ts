import { Test, TestingModule } from '@nestjs/testing';
import { GrowersService } from './growers.service';

describe('GrowersService', () => {
  let service: GrowersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrowersService],
    }).compile();

    service = module.get<GrowersService>(GrowersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
