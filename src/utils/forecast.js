const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {
    // const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=f'
    key = '9ab4081a16ced332f1a1fef8def4b989'
    const url= 'http://api.weatherstack.com/current?access_key='+key+'&query=' + latitude + ',' + longitude + '&units=f'
    console.log(url)
    request( { url, json: true}, (error, { body } = {}) => {
        // console.log(response.body)
        if (error) {
            callback('Unable to connect to weather services!', undefined) // Undefinied as the second argument by default.
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined) // Undefinied as the second argument by default.
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. it is currently '+ body.current.temperature+' degrees out. There is a '+ body.current.precip+ ' prob to rain')
        }
    } )
}

module.exports = forecast
