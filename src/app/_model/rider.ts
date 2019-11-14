import { Status } from './status';
import { City } from './city';

export class Rider {
    public Id: number;
    public Name: string;
    public MobileNo: string;
    public Password: string;
    public Status: Status;
    public CityId: number;
    public City: City;
    public CNIC: number;
    public Address: string;
    public Rating : number ;


    constructor() {
        this.Status = Status.Enable;
    }
}
