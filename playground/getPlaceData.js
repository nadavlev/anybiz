// general search
const placeSearchURLuel = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyC0-UhEcfoNGoXSwnIXzJw-j1z9q8s2E4M"
const key = process.env.GOOGLE_API_KEY;

// supported place types
// https://developers.google.com/maps/documentation/places/web-service/supported_types


const getPlaceData = (lat, long, radius) => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${key}&location=${lat},${long}&radius=${radius}`
    //use axius
    return require("../data/response_data");

}

const getNextPage = (pageToken) => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${key}&pagetoken=${pageToken}`;
    //console.log(url);
    return require('../data/response_data2');
}

const getPlaceDetails = (placeId) => {
    //https://maps.googleapis.com/maps/api/place/details/json?key=${key}&place_id=ChIJcw1vjF1JHRURvtc3g38BBZo
    const url = `https://maps.googleapis.com/maps/api/place/details/json?key=${key}&place_id=${placeId}`;
    //console.log(url);
    return require('../data/placeDetails');
}

module.exports = {getPlaceData, getNextPage, getPlaceDetails};
