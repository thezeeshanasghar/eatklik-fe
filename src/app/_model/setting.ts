import { status } from './status';

export class Setting {
  public Id: number;
  public Name: string;
  public Value: string;

  constructor() {
    this.Id = 0;
    this.Name = '';
    this.Value = '';
  }
}
