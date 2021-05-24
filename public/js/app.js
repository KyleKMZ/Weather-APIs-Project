const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
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

    const searchTerm = search.value
    fetch('/weather?address=' + searchTerm).then((response) => {
        response.json().then((data) => {
            if (data.error) {

            } else {
                
            }
        })
    })

})