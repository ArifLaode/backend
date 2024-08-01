import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnggotaController } from './anggota.controller';
import { AnggotaService } from './anggota.service';
import { Anggota } from './anggota.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Anggota])],
  controllers: [AnggotaController],
  providers: [AnggotaService],
})
export class AnggotaModule {}