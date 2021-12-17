// POST crear datos
const createUser =  (objPost) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST" , "https://genjs-3e4eb-default-rtdb.firebaseio.com//posts/.json", true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            document.querySelector('#title').value = ''
            document.querySelector('#author').value = ''
            document.querySelector('#timetoread').value = ''
            document.querySelector('#resume').value = ''
            let res = JSON.parse(data.target.response )
            let idPost = res.name
            document.getElementById('post__id').innerText = idPost
            document.getElementById('alert__response').classList.remove('d-none')
        }
    }
    xhttp.send( JSON.stringify(objPost) )
}


let send__post = document.querySelector('#send__post')
send__post.addEventListener('click', () => {
    
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let timetoread = document.querySelector('#timetoread').value
    let resume = document.querySelector('#resume').value
    
    // console.log(title, author, timetoread, resume)

    let objNewPost = {
        title: title,
        author: author,
        timetoread: timetoread,
        resume: resume
    }

    createUser(objNewPost)
})





// let objNewPost =  {
//     author: 'Jorge luis',
//     title: 'foo',
//     body: 'bar lorem',
// }