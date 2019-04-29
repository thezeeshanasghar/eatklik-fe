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

    constructor() {
        this.Status = Status.Enable;
    }
}
