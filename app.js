// GET
// VERbost http (POST, PUT, PATCH,  GET,DELETE)

// POST para crear datos

const xhttp = new XMLHttpRequest()
xhttp.open( "POST" , "https://genjs-292ac-default-rtdb.firebaseio.com/posts/.json", true)
xhttp.onload = function(data) {
    if(data.target.status === 200){
        console.log(data)
    }
}

let objNewPost =  {
    author: 'Jorge luis',
    title: 'foo',
    body: 'bar lorem',
}

// xhttp.send( JSON.stringify(objNewPost) )

// PATCH para actualizar datos
const updateUser =  (objUpdate, idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "PATCH" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send( JSON.stringify(objUpdate) )
}

let objUpdatePost =  {
    author: 'Jose Alberto Barragan Figueroa',
}

// updateUser(objUpdatePost, '-Mr550M_3YavOr8V9c6p')

// DELETE Eliminar datos
const deleteUser =  (idUser) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "DELETE" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idUser}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            console.log(data)
        }
    }
    xhttp.send()
}
deleteUser('-Mr56XoaV53nLaqguqEM')
deleteUser('-Mr56cwH-lRdBwX468zi')


