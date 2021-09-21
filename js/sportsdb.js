const loadTeam = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal')
    .then(res => res.json())
    .then(data => setContent(data))
}

loadTeam()

const getId = elementId => {
    return document.getElementById(elementId)
}

const setContent = data => {
    const firstData = data.teams[0]
    console.log(firstData)
}