import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BukuService } from './buku.service';
import { Buku } from './buku.entity';

@Controller('/daftarBuku')
export class BukuController {
    constructor(private readonly bukuService: BukuService) {}

    @Get()
    async findAll(): Promise<Buku[]> {
        return await this.bukuService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Buku> {
        return await this.bukuService.findOne(+id);
    }

    @Post()
    create(@Body() buku: Buku): Promise<Buku> {
        return this.bukuService.create(buku);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() buku: Buku): Promise<Buku> {
        return this.bukuService.update(+id, buku);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.bukuService.remove(+id);
    }
}
