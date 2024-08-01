import { Test, TestingModule } from '@nestjs/testing';
import { PinjamController } from './pinjam.controller';

describe('PinjamController', () => {
  let controller: PinjamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PinjamController],
    }).compile();

    controller = module.get<PinjamController>(PinjamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
