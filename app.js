const request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=458ead5a4c267ba0d99631ea27f6a749&query=51.5098,-0.1180'
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('HTTP Request Error!')
//     } else if (response.body.error) {
//         console.log('Location Not Found!)
//     } else {
//         const temperature = response.body.current.temperature 
//         const feelslike = response.body.current.feelslike
//         console.log('It is currently ' + temperature + ' degrees outside. But it feels like ' 
//                     + feelslike + ' degrees.')
//     }
// })

const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Yangon.json?access_token=pk.eyJ1Ijoia3lsZXphdyIsImEiOiJja293d3pwbGEwMGk0MnZsbHdmY3dyemVuIn0.ODji_1yxKnPVTbCCzJ5Elw'
request({ url: geocode_url, json: true }, (error, response) => {
    if (error) {
        console.log('HTTP Request failed!')
    } else if (response.body.features.length === 0) {
        console.log('Location Not Found!')
    } else {
        console.log(response.body.features[0].center)
    }
})
