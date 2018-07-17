import { Column, Table } from 'anydb-sql';
export interface City {
    cityId: string;
    name: string;
    img_url: string;
}
export interface CityTable extends Table<City> {
    cityId: Column<string>;
    name: Column<string>;
    img_url: Column<string>;
}
export declare let City: CityTable;
