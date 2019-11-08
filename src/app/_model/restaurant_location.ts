import { City } from './city';

export class RestaurantLocation {
  public Id: number;
  public Address: string;
  public Latitude: number;
  public Longitude: number;
  public DelRadius: number;
  public CityId: number;
  public City: City;
  public RestaurantId: number;

  constructor() {
    // this.Address = '';
    // this.Latitude = this.Longitude = 0;
  }
}
