import { Status } from './status';
import { City } from './city';

export class Coupon {
    public Id: number;
    public Code: string;
    public MinAmount: number ;
    public MaxAmount: number;
    public PctDiscount: number;
    public ValidTill: any;
    public CityId: number;
    public City: City ;
    public Status: Status;

    constructor() {
        this.Status = Status.Enable;
    }
}
