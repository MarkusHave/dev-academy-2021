import { Injectable } from '@nestjs/common';
import { NamesDTO } from './names.dto';
import { names } from '../names.json';

@Injectable()
export class NamesService {
  // Returns all names and amounts, ordered by amount, most popular first
  getAllByAmount(): Array<NamesDTO> {
    return names.sort((a, b) => (a.amount > b.amount ? -1 : 1));
  }
}
