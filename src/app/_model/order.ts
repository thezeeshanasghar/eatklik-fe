
export class Order {
  public Id: number;
  public Subtotal: number;
  public Fee: number;
  public GST: number;
  public GrandTotal: number;
  public Created: string;
  public CustomerId: number;
  public OrderItems: number;
  public Status: string;

  constructor() {
    this.Created = '';
  }
}
