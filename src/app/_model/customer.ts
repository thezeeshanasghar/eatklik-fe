import { City } from './city';
import { Review } from './review';
import { Status } from './status';

export class Customer {
  public Id: number;
  public Name: string;
  public Email: string;
  public Password: string;
  public ImagePath: string;
  public Address: string;
  public Status: Status;
  public CityId: number;
  public City: City;

  public RestaurantReviews: Review[];

  constructor() {
    this.Name = '';
    this.Email = '';
    this.Password = '';
    this.ImagePath = '';
    this.Address = '';
    this.Status = Status.Enable;
  }
}
