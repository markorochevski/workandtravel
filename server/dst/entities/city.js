"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let CitySchema = new mongoose.Schema({
    _id: String,
    name: String,
    route_name: String,
    img_url: String
});
exports.City = mongoose.model('City', CitySchema);
//# sourceMappingURL=city.js.map