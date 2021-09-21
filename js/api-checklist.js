// const loadApi = () => {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => callApi(data))
// }

// loadApi()
// const callApi = comments => {
//     const commentElement = document.getElementById('comments')
//     for(const comment of comments){
//         console.log(comment)
//         const div = document.createElement('div')
//         div.innerText = `Name: ${comment.body} Email: ${comment.email}`
//         commentElement.appendChild(div)
//     }
    
// }

// const loadApi = () => {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => callApi(data))
// }

// loadApi()
// const callApi = comments => {
//     const commentElement = document.getElementById('comments')
//     comments.forEach(comment =>{
//         console.log(comment)
//         const div = document.createElement('div')
//         div.innerText = `Name: ${comment.body} Email: ${comment.email}`
//         commentElement.appendChild(div)
//     })
    
// }

const loadCommentId = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCommentDetail(data))
}
// loadCommentId()
const displayCommentDetail = comments => {
    const commentElement = document.getElementById('comments')
    for(const comment of comments){
        const div = document.createElement('div')
        div.innerText = `ID: ${comment.id} Email: ${comment.email}`
        commentElement.appendChild(div)
    }
}

