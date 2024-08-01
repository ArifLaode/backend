import { Module } from '@nestjs/common';
import { BukuController } from './buku.controller';
import { BukuService } from './buku.service';
import { Buku } from './buku.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Buku])],
  controllers: [BukuController],
  providers: [BukuService]
})
export class BukuModule {}
