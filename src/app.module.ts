import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnggotaModule } from "./anggota/anggota.module";
import { Anggota } from './anggota/anggota.entity';
import { BukuModule } from './buku/buku.module';
import { Buku } from './buku/buku.entity';
import { PinjamController } from './pinjam/pinjam.controller';
import { PinjamModule } from './pinjam/pinjam.module';
import { Pinjam } from './pinjam/pinjam.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'perpus',
      entities: [Anggota, Buku, Pinjam],
      synchronize: false,
    }),
    AnggotaModule,
    BukuModule,
    PinjamModule,
  ],
})
export class AppModule {}