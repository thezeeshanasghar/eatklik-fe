import { Status } from './status';

export class City {
  public Id: number;
  public Name: string;
  public ImagePath: string;
  public Status: Status;
  constructor() {
    this.Id = 0;
    this.Name = '';
    this.ImagePath = '';
  }
}
