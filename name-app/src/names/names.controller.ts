import { Controller, Get } from '@nestjs/common';
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
}
