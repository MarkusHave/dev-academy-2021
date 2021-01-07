import { Injectable } from '@nestjs/common';
import { NamesDTO } from './names.dto';
import { names } from '../names.json';

@Injectable()
export class NamesService {
  // Returns all names and amounts, ordered by amount, most popular first
  findAllByAmount(): Array<NamesDTO> {
    return names.sort((a, b) => (a.amount > b.amount ? -1 : 1));
  }

  // Returns all names by alphabetical order
  findAllByName(): Array<string> {
    // First include only names and then sort them to alphabetical order
    return names.map((x) => x.name).sort((a, b) => (a > b ? 1 : -1));
  }

  // Returns total amount of names
  totalNameCount(): number {
    return names.reduce((acc, name) => acc + name.amount, 0);
  }

  // Return the amount of the name given as a parameter
  nameCount(name: string): number {
    // Capitalize first letter before trying to find it
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return names.find((item) => item.name == capitalizedName).amount;
  }
}
