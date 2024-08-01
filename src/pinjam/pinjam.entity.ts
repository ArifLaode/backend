import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Buku } from "src/buku/buku.entity";
import { Anggota } from "src/anggota/anggota.entity";

    @Entity('peminjam')
    export class Pinjam {
        @PrimaryColumn()
        id_peminjam: number;

        @ManyToOne(type => Anggota, anggota => anggota.peminjams)
        @JoinColumn({ name: 'id_anggota' })
        anggota: Anggota;

        @ManyToOne(type => Buku, buku => buku.peminjams)
        @JoinColumn({ name: 'id_buku' })
        buku: Buku;

        @Column()
        tanggal_pinjam: Date;

        @Column()
        tanggal_ambil: Date;
    }