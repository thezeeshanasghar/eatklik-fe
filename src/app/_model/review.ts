import { Status } from './status';
import { Customer } from './customer';
import { Restaurant } from './restaurant';

export class Review {
    public Id: number;
    public Rating: number;
    public Comment: string;
    public Status: Status;


    public CustomerId: number;
    public Customer: Customer;
    public RestaurantId: number;
    public Restaurant: Restaurant;

    constructor() {
        this.Rating = 0;
        this.Comment = '';
        this.Status = Status.Enable;
    }
}
