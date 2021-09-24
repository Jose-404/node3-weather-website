console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then( (response) => {
//     response.json().then( (data) => {
//         console.log(data)
//     })
// })

// URL
// http://localhost:3000/weather?address=New%20York

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener( 'submit', (e) => {
    e.preventDefault() // previene que el navegador se reinicie cuando se ingresa un valor.

    const location = search.value
    // console.log('Current Location: '+ location)

    messageOne.textContent= 'Loading ...'

    if (location.length === 0) {
        messageOne.textContent='You must write a valid location'
    } else {
        fetch('http://localhost:3000/weather?address='+location).then( (response) => {
            response.json().then( (data) => {
                if (data.error) {
                    messageOne.textContent = data.error
                } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast

                }
            })
        })
    }

})