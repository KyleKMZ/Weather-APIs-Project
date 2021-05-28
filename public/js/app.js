const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const loading_error = document.querySelector('#loading-error')
const location_data = document.querySelector('#location')
const description = document.querySelector('#description')
const description_img = document.querySelector('#description_img')
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

    loading_error.style.visibility = 'visible'
    loading_error.textContent = 'Loading...'
    const searchTerm = search.value
    fetch('/weather?address=' + searchTerm).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                loading_error.textContent = data.error
            } else {
                location_data.textContent = 'Location: ' + data.location
                description.textContent = 'Description: ' + data.description
                description_img.src = data.description_img_src
                description_img.style.visibility = 'visible'
                fahrenheit_temp.textContent = data.fahrenheit_temp + 'F'
                fahrenheit_feels.textContent = 'and feels like: ' + data.fahrenheit_feels + 'F'
                celsius_temp.textContent = data.celsius_temp + 'C'
                celsius_feels.textContent = 'and feels like: ' + data.celsius_feels + 'C'
                kelvin_temp.textContent = data.kelvin_temp + 'K'
                kelvin_feels.textContent = 'and feels like: ' + data.kelvin_feels + 'K'
                humidity.textContent = 'Humidity: ' + data.humidity + ' %'
                precipitation.textContent = 'Precipitation: ' + data.precipitation + ' millimeters'
                pressure.textContent = 'Pressure: ' + data.pressure + ' millibar'
                w_speed.textContent = 'Wind Speed: ' + data.w_speed + ' km/h'
                w_degree.textContent = 'Wind Degree: ' + data.w_degree + ' degrees'
                w_direction.textContent = 'Wind Direction: ' + data.w_direction
                loading_error.style.visibility = 'hidden'
            }
        })
    })

})