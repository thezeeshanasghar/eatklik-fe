export class RestaurantTiming {
  public Id: number;
  public WeekDay: WeekDay;
  public StartTime: string;
  public EndTime: string;

  constructor() {
    this.WeekDay = WeekDay.Monday;
    this.StartTime = this.EndTime = '';
  }
}

export enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
