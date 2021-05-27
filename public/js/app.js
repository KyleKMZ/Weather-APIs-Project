const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const loading_error = document.querySelector('#loading-error')
const location_data = document.querySelector('#location')
const description = document.querySelector('#description')
const fahrenheit_temp = document.querySelector('#fahrenheit_temp')
const fahrenheit_feels = document.querySelector('#fahrenheit_feels')
const celsius_temp = document.querySelector('#celsius_temp')
const celsius_feels = document.querySelector('#celsius_feels')
const kelvin_temp = document.querySelector('#kelvin_temp')
const kelvin_feels = document.querySelector('#kelvin_feels')
const humidity = document.querySelector('#humidity')
const precipitation = document.querySelector('#precipitation')
const pressure = document.querySelector('#pressure')
const w_speed = document.querySelector('#w_speed')
const w_degree = document.querySelector('#w_degree')
const w_direction = document.querySelector('#w_direction')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    loading_error.textContent = 'Loading...'
    const searchTerm = search.value
    fetch('/weather?address=' + searchTerm).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                loading_error.textContent = data.error
            } else {
                location_data.textContent = 'Location: ' + data.location
                description.textContent = 'Description: ' + data.description
                fahrenheit_temp.textContent = data.fahrenheit_temp
                fahrenheit_feels.textContent = 'but feels like: ' + data.fahrenheit_feels
                celsius_temp.textContent = data.celsius_temp
                celsius_feels.textContent = 'but feels like: ' + data.celsius_feels
                kelvin_temp.textContent = data.kelvin_temp
                kelvin_feels.textContent = 'but feels like: ' + data.kelvin_feels
                humidity.textContent = 'Humidity: ' + data.humidity
                precipitation.textContent = 'Precipitation: ' + data.precipitation
                pressure.textContent = 'Pressure: ' + data.pressure
                w_speed.textContent = 'Wind Speed: ' + data.w_speed
                w_degree.textContent = 'Wind Degree: ' + data.w_degree
                w_direction.textContent = 'Wind Direction: ' + data.w_direction
                console.log('Done updating')
                loading_error.textContent = ''
            }
        })
    })

})