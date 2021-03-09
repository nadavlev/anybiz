require('./db/mongodb')
const mongoose = require('mongoose');
const {getPlaceDetails} = require('../playground/getPlaceData')

// const Test = new mongoose.model('Test', {
//     name: {
//         type:String
//     },
//     count: {
//         type: Number
//     }
// });
//
// const t1 = new Test({name: "Testing 1", count: 1});
// t1.save().then(result => {
//     console.log(result);
// }).catch(err => {
//     console.error(err);
// })
getPlaceDetails('ChIJcw1vjF1JHRURvtc3g38BBZo');
