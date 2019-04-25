import { Menu } from './menu';
import { Status } from './status';

export class MenuItem {
  public Id: number;
  public Name: string;
  public ImagePath: string;
  public Size: ItemSize;
  public Price: number;
  public Status: Status;

  public MenuId: number;
  public Menu: Menu;

  constructor() {
    this.Name = this.ImagePath = '';
    this.Size = ItemSize.Nothing;
    this.Price = 0;
    this.Status = Status.Enable;
  }
}

export enum ItemSize {
  Nothing,
  Half,
  Full
}
