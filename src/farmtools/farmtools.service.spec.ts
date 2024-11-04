import { Test, TestingModule } from '@nestjs/testing';
import { FarmtoolsService } from './farmtools.service';

describe('FarmtoolsService', () => {
  let service: FarmtoolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmtoolsService],
    }).compile();

    service = module.get<FarmtoolsService>(FarmtoolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
