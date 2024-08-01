import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Buku } from './buku.entity';

@Injectable()
export class BukuService {
    constructor(
        @InjectRepository(Buku) 
        private bukuRepository: Repository<Buku>
    ){}

    findAll(): Promise<Buku[]> {
        return this.bukuRepository.find();
    }

    findOne(id_buku: number): Promise<Buku> {
        return this.bukuRepository.findOne({where: {id_buku}});
    }

    async create(anggota: Buku): Promise<Buku> {
        return this.bukuRepository.save(anggota);
    }

    async update(id_buku: number, buku: Partial<Buku>): Promise<Buku> {
        await this.bukuRepository.update({ id_buku }, buku);
        return this.bukuRepository.findOne({where: {id_buku}});
    }

    async remove(id: number): Promise<void> {
        await this.bukuRepository.delete(id);
    }
}
