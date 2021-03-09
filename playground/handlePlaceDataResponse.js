const {getPlaceData, getNextPage, getPlaceDetails} = require("./getPlaceData");
const Place = require('../src/models/place')
require('../src/db/mongodb');

const main = (lat, long, radius) => {
    // const placeDetails = getPlaceDetails('ChIJAYUkrl9JHRUR4T7fwer8ARU');
    // console.log(placeDetails);
    const response = getPlaceData(lat, long, radius);
    handleDataResponse(response);
}

let temp_page_count = 0;
const handleDataResponse = (response) => {
    const nextPage = response.next_page_token;
    const results = response.results;
    if (nextPage && temp_page_count<=2) {
        temp_page_count++;
        console.log('Go Get the next page');
        handleDataResponse(getNextPage(nextPage));
    }

    handlePageResults(results);

}

const handlePageResults = (results) => {
    results.forEach(result => {
        handleSingleResult(result);
    })
}

const handleSingleResult = (result) => {
        const place = new Place(result);
        delete place._id;
        const query = {place_id: place.place_id};
        Place.findOneAndUpdate(query, result, {upsert: true, new: true}).then(result => {
            //console.log(result);
        }).catch(error => {
            console.error(error);
        })
    };

main(32.1075036, 34.7990409, 500);
