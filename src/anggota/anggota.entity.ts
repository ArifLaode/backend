import { Pinjam } from "src/pinjam/pinjam.entity";
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";

@Entity()
export class Anggota {
    @PrimaryColumn()
    id_anggota: number;

    @Column({ length: 100 })
    nama: string;

    @Column({ length: 100 })
    alamat: string;

    @Column({ length: 100 })
    nomor: string;

    @OneToMany(() => Pinjam, peminjam => peminjam.anggota)
    peminjams: Pinjam[];
}