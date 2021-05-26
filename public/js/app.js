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
                location_data.textContent = data.location
                description.textContent = data.description
                fahrenheit_temp.textContent = data.fahrenheit_temp
                fahrenheit_feels.textContent = data.fahrenheit_feels
                celsius_temp.textContent = data.celsius_temp
                celsius_feels.textContent = data.celsius_feels
                kelvin_temp.textContent = data.kelvin_temp
                kelvin_feels.textContent = data.kelvin_feels
                humidity.textContent = data.humidity
                precipitation.textContent = data.precipitation
                pressure.textContent = data.pressure
                w_speed.textContent = data.w_speed
                w_degree.textContent = data.w_degree
                w_direction.textContent = data.w_direction

                loading_error.textContent = ''
            }
        })
    })

})