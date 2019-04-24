// ------ Promotion Type Script file (to define data type for Pomotion attributes) ------
// ------ these are some attributes for Promotion Object in db (id, name, content,
//  promotype {image, news, video}, cityId, City (Obect of City class) ) --------

import {City} from './city';

export class Promotion {

    Id: number;
    Name: string;
    Content: string;
    PromoType: PromoType;
    CityId: number;
    city: City;

    constructor() {
        this.Id = 0;
        this.Name = '';
        this.Content = '';
        this.PromoType = 0;
        this.CityId = 0;
        this.city = new City();
    }

}

export enum PromoType {
    image, news, video
}
