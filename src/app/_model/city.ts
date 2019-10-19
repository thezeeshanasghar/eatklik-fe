import { Status } from './status';

export class City {
  public Id: number;
  public Name: string;
  public ImagePath: string;
  public CoverImagePath: string;
  public Status: Status;

  constructor() {
    this.Status = Status.Enable;
  }
}
