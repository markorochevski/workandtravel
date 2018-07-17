import * as mongoose from 'mongoose';

let CitySchema = new mongoose.Schema({
    _id: String,
    name: String,
    route_name: String,
    img_url: String
});

export let City = mongoose.model('City', CitySchema);








