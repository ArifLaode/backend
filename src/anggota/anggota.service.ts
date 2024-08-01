import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Anggota } from './anggota.entity';

@Injectable()
export class AnggotaService {
  constructor(
    @InjectRepository(Anggota)
    private anggotaRepository: Repository<Anggota>,
  ) {}

  findAll(): Promise<Anggota[]> {   
    return this.anggotaRepository.find();
  }

  findOne(id_anggota: number): Promise<Anggota> {
    return this.anggotaRepository.findOne({ where: { id_anggota } });
  }

  async create(anggota: Anggota): Promise<Anggota> {
    return this.anggotaRepository.save(anggota);
  }

  async update(id_anggota: number, anggota: Partial<Anggota>): Promise<Anggota> {
    await this.anggotaRepository.update({ id_anggota }, anggota);
    return this.anggotaRepository.findOne({ where: { id_anggota } });
  }

  async remove(id_anggota: number): Promise<void> {
    await this.anggotaRepository.delete({ id_anggota });
  }
}