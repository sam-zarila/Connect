import { Test, TestingModule } from '@nestjs/testing';
import { FarmtoolsController } from './farmtools.controller';
import { FarmtoolsService } from './farmtools.service';

describe('FarmtoolsController', () => {
  let controller: FarmtoolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmtoolsController],
      providers: [FarmtoolsService],
    }).compile();

    controller = module.get<FarmtoolsController>(FarmtoolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
