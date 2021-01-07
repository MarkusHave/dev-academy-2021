import { Controller, Get, Param } from '@nestjs/common';
import { NamesService } from './names.service';
import { NamesDTO } from './names.dto';

@Controller('names')
export class NamesController {
  constructor(private readonly namesService: NamesService) {}

  @Get()
  findAllByAmount(): Array<NamesDTO> {
    return this.namesService.findAllByAmount();
  }

  @Get('a-z')
  findAllByName(): Array<string> {
    return this.namesService.findAllByName();
  }

  @Get('count')
  totalNameCount(): number {
    return this.namesService.totalNameCount();
  }

  @Get(':name')
  nameCount(@Param('name') name: string): number {
    return this.namesService.nameCount(name);
  }
}
