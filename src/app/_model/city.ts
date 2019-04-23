import { status } from './status';

export class City {
  public id: number;
  public name: string;
  public imagePath: string;
  public status: status;
  constructor() {
    this.id = 0;
    this.name = '';
    this.imagePath = '';
  }
}
