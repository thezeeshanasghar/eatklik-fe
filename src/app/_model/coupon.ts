import { Status } from './status';

export class Coupon {
    public Id: number;
    public Code: string;
    public Discount: number;
    public PctDiscount: number;
    public ValidTill: any;
    public Status: Status;

    constructor() {
        this.Status = Status.Enable;
    }
}
