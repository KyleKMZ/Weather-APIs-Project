const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=458ead5a4c267ba0d99631ea27f6a749&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, {body} ) => {
        if (error) {
            callback('Forecast: HTTP Request Error!', undefined)
        } else if (body.error) {
            callback('Forecast: Location Not Found!', undefined)
        } else {
            // const temperature = body.current.temperature 
            // const feelslike = body.current.feelslike
            // const description = body.current.weather_descriptions[0]

            const description = body.current.weather_descriptions[0]
            const description_img_src = body.current.weather_icons[0]
            const fahrenheit_temp = body.current.temperature
            const fahrenheit_feels = body.current.feelslike
            const celsius_temp = Math.round((fahrenheit_temp - 32) * (5/9))
            const celsius_feels = Math.round((fahrenheit_feels - 32) * (5/9))
            const kelvin_temp = Math.round(celsius_temp + 273.15)
            const kelvin_feels = Math.round(celsius_feels + 273.15)
            const humidity = body.current.humidity
            const precipitation = body.current.precip
            const pressure = body.current.pressure
            const w_speed = body.current.wind_speed
            const w_degree = body.current.wind_degree
            const w_direction = body.current.wind_dir

            callback(undefined, {
                description: description,
                description_img_src: description_img_src,
                fahrenheit_temp: fahrenheit_temp,
                fahrenheit_feels: fahrenheit_feels,
                celsius_temp: celsius_temp,
                celsius_feels: celsius_feels,
                kelvin_temp: kelvin_temp,
                kelvin_feels: kelvin_feels,
                humidity: humidity,
                precipitation: precipitation,
                pressure: pressure,
                w_speed: w_speed,
                w_degree: w_degree,
                w_direction: w_direction
            })
        }
    })
    
}

module.exports = forecast