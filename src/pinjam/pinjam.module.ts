import { Module } from '@nestjs/common';
import { PinjamController } from './pinjam.controller';
import { PinjamService } from './pinjam.service';
import { Pinjam } from './pinjam.entity';
import { Buku } from 'src/buku/buku.entity';
import { Anggota } from 'src/anggota/anggota.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pinjam, Buku, Anggota])],
  controllers: [PinjamController],
  providers: [PinjamService]
})
export class PinjamModule {}
