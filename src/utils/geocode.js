
const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoianVhbmpvc2U5MyIsImEiOiJja3R0M2NsdnMxbWprMnZvM2p4OGtud21jIn0.i1Nwq-KU2u5A8BZjWg1HIw'

    request( { url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services!') // Undefinied as the second argument by default.
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search  ') // Undefinied as the second argument by default.
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    } )
}

module.exports = geocode