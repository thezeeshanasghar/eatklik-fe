
export class Order {
  public Id: number;
  public Subtotal: number;
  public Fee: number;
  public GST: number;
  public GrandTotal: number;
  public Created: string;
  public CustomerId: number;
  public OrderItems: any;
  public OrderStatus: number;
  public RiderId: number;
  public CityId: number;
  public RestaurantId: number;

  constructor() {
    this.Created = '';
  }
}
