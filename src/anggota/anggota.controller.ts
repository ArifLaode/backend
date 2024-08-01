import { Controller, Get, Post, Body, Put, Param, Delete, Logger } from '@nestjs/common';
import { AnggotaService } from './anggota.service';
import { Anggota } from './anggota.entity';

@Controller('daftarAnggota')
export class AnggotaController {
  private readonly logger = new Logger(AnggotaController.name);

  constructor(private readonly anggotaService: AnggotaService) {}

  @Get()
  async findAll(): Promise<Anggota[]> {
    this.logger.log('Received request to get all anggota');
    const result = await this.anggotaService.findAll();
    this.logger.log(`Returning ${result.length} anggota`);
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Anggota> {
    this.logger.log(`Received request to get anggota with id: ${id}`);
    const result = await this.anggotaService.findOne(+id);
    if (result) {
      this.logger.log(`Returning anggota with id: ${id}`);
    } else {
      this.logger.warn(`Anggota with id: ${id} not found`);
    }
    return result;
  }

  @Post()
  async create(@Body() anggota: Anggota): Promise<Anggota> {
    this.logger.log(`Received request to create anggota with data: ${JSON.stringify(anggota)}`);
    const result = await this.anggotaService.create(anggota);
    this.logger.log(`Created anggota with id: ${result.id_anggota}`);
    return result;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() anggota: Partial<Anggota>): Promise<Anggota> {
    this.logger.log(`Received request to update anggota with id: ${id} and data: ${JSON.stringify(anggota)}`);
    const result = await this.anggotaService.update(+id, anggota);
    this.logger.log(`Updated anggota with id: ${id}`);
    return result;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    this.logger.log(`Received request to delete anggota with id: ${id}`);
    await this.anggotaService.remove(+id);
    this.logger.log(`Deleted anggota with id: ${id}`);
  }
}
