export class ExtraItem {
  public Id: number;
  public Name: string;
  public Size : string ;
  public Price: number;
  public ImagePath: string;
  public RestaurantId: number;

  constructor() {
    this.Name = '';
    this.ImagePath = '';
  }
}
