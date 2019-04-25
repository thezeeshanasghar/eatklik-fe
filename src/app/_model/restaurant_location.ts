import { City } from './city';

export class RestaurantLocation {
  public Id: number;
  public Address: string;
  public latitude: number;
  public longitude: number;
  public CityId: number;
  public City: City;

  constructor() {
    this.Address = '';
    this.latitude = this.longitude = 0;
  }
}
