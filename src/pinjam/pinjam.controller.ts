import { Controller, Get } from '@nestjs/common';
import { PinjamService } from './pinjam.service';
import { PinjamDto } from './pinjam.dto';

@Controller('/daftarPeminjam')
export class PinjamController {
    constructor(private readonly pinjamService: PinjamService) {}

    @Get()
    async findAll(): Promise<PinjamDto[]> {
        const peminjams = await this.pinjamService.findAll();
        return peminjams.map(peminjam => ({
            id_peminjam: peminjam.id_peminjam,
            nama_anggota: peminjam.anggota.nama,
            nama_buku: peminjam.buku.nama,
            tanggal_pinjam: peminjam.tanggal_pinjam,
            tanggal_ambil: peminjam.tanggal_ambil,
        }));
    }
}
