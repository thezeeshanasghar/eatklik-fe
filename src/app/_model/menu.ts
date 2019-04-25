import { Restaurant } from './restaurant';
import { MenuItem } from './menu_item';
import { Status } from './status';

export class Menu {
  public Id: number;
  public Name: string;
  public ImagePath: string;
  public Status: Status;

  public MenuItems: MenuItem[];

  public RestaurantId: number;
  public Restaurant: Restaurant;

  constructor() {
    this.Name = this.ImagePath = '';
    this.Status = Status.Enable;
  }
}
