import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Pinjam } from "src/pinjam/pinjam.entity";

@Entity()
export class Buku {
    @PrimaryColumn()
    id_buku: number;

    @Column({ length: 100 })
    nama: string;

    @Column({ length: 100 })
    pengarang: string;

    @OneToMany(() => Pinjam, peminjam => peminjam.buku)
    peminjams: Pinjam[];
}