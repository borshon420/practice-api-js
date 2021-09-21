// const loadFlag = () => {
//     fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => displayCountryFlag(data))
// }

// loadFlag()


// const displayCountryFlag = data => {
//     console.log(data[0])
//     const countryName = document.getElementById('name')
//     for(const name of data){
//         const h3 = document.createElement('h3')
//         h3.innerText = name.name
//         countryName.appendChild(h3)
//     }

// }

const loadFlag = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountryFlag(data))
}

loadFlag()


const displayCountryFlag = data => {
    console.log(data[0])
    const countryName = document.getElementById('name')
    for(const flag of data){
        const img = document.createElement('img')
        img.src = `${flag.flag}`
        img.style.width = '400px'
        img.style.display = 'block'
        img.style.marginBottom = '10px'
        countryName.appendChild(img)
    }

}