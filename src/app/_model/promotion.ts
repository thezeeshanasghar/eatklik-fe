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
    City: City;

    constructor() {
        this.Id = 0;
        this.Name = '';
        this.CityId = 0;
    }

}

export enum PromoType {
    image, news, video
}
