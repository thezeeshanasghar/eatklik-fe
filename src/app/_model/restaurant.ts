import { RestaurantLocation } from './restaurant_location';
import { RestaurantContact } from './restaurant_contact';
import { RestaurantTiming } from './restaurant_timing';
import { RestaurantCuisine } from './restaurant_cuisine';
import { Review } from './review';
import { City } from './city';
import { Status } from './status';

export class Restaurant {
  public Id: number;
  public Name: string;
  public MinOrderPrice: number;
  public MaxOrderPrice: number;
  public DelCharges: number;
  public Description: string;
  public Status: Status;
  public IsSponsor: boolean;
  public CityId: number;
  public City: City;
  public LogoImagePath: string;
  public CoverImagePath: string;

  public RestaurantCuisines: RestaurantCuisine[];
  public RestaurantLocation: RestaurantLocation[];
  public RestaurantTimings: RestaurantTiming[];
  public RestaurantContacts: RestaurantContact[];
  public CustomrReviews: Review[];

  constructor() {
    // this.Name = this.Description = this.LogoImagePath = this.CoverImagePath = '';
    // this.MinOrderPrice = this.MaxOrderPrice = 0;
  }
}
