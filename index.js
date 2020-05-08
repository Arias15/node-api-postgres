//https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
//Devuelve el middleware que solo analiza los urlencodedcuerpos y solo mira las solicitudes donde el Content-Typeencabezado coincide con la typeopción
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
//Le diremos una ruta para buscar una GET solicitud en la /URL raíz ( ) y devolver algunos JSON
app.get('/', (request, response) => {
    response.json({ info: 'GUIDO ES UNA RATA' })
})
//muestra la conexión al puerto
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

//Llamando a todas las funciones de consulta de queries.js
const db = require('./queries')

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

//Agrega-Add a new user with the name Elaine and email elaine@example.com.
//curl --data "name=Elaine&email=elaine@example.com" http://localhost:3000/users

//Actualice el usuario con ID 1para tener nameKramer y emailkramer@example.com.
//curl -X PUT -d "name=Kramer" -d "email=kramer@example.com" http://localhost:3000/users/1

//Delete the user with id 1
//curl -X "DELETE" http://localhost:3000/users/1