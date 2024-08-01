import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pinjam } from './pinjam.entity';
import { Anggota } from 'src/anggota/anggota.entity';
import { Buku } from 'src/buku/buku.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class PinjamService {
    constructor(
        @InjectRepository(Pinjam)
        private pinjamRepository: Repository<Pinjam>,
        @InjectRepository(Anggota)
        private anggotaRepository: Repository<Anggota>,
        @InjectRepository(Buku)
        private bukuRepository: Repository<Buku>
    ) {}

    async findAll(): Promise<Pinjam[]> {
        return this.pinjamRepository.find({ relations: ['anggota', 'buku'] });
    }
}
