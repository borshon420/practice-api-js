const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => setContent(data))
}

const getId = elementId => {
    return document.getElementById(elementId)
}
loadRandomUser()
const setContent = data => {
    console.log(data)
    const firstData = data.results[0]
    getId('name').innerText = `${firstData.name.title} ${firstData.name.first} ${firstData.name.last}`
    getId('cell').innerText = firstData.cell
    getId('gender').innerText = firstData.gender
    getId('img').src = firstData.picture.large

}