import { Status } from './status';

export class City {
  public Id: number;
  public Name: string;
  public ImagePath: string;
  public Status: Status;

  constructor() {
    this.Name = '';
    this.ImagePath = '';
    this.Status = Status.Enable;
  }
}
