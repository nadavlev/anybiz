const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Point = new Schema({
    lat: Number,
    lng: Number
})

const ViewPort = new Schema({
    northeast: Point,
    southwest: Point
})

const Geometry = new Schema({
    location: Point,
    viewport: ViewPort,
})

const OpeningHours = new Schema({
    open_now: Boolean
})

const Photo = new Schema({
    height: Number,
    html_attributions: [String],
    photo_reference: String,
    width: Number
})

const PlusCode = new Schema({
    compound_code: String,
    global_code: String
})

const Place = mongoose.model('Place', {
    place_id: {
        type: String
    },
    business_status: String,
    geometry: Geometry,
    icon: String,
    name: String,
    opening_hours: OpeningHours,
    photos: [Photo],
    plus_code: PlusCode,
    rating: Number,
    reference: String,
    scope: String,
    types: [String],
    user_ratings_total: Number,
    vicinity: String
})

module.exports = Place;
