export class RestaurantTiming {
  public Id: number;
  public WeekDay: WeekDay;
  public StartTime: string;
  public EndTime: string;
  public RestaurantId: number;

  constructor() {
    this.WeekDay = WeekDay.Monday;
    this.StartTime = this.EndTime = '';
  }
}

export enum WeekDay {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
