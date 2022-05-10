const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

/*
//----MODULO PERSISTENCIA DE SESIONES EN JSON------------------
const FileStore = require('session-file-store')(session)
*/

//----MODULO PERSISTENCIA EN mongoDB local y ATLAS cloud-------
const connectMongo = require ('connect-mongo')
//----parametros para conectar a ATLAS-------------------------
const advanceOptions = {useNewUrlParser: true, useUnifiedTopology: true}

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(8080, () => {
  console.log('servidor levantado PUERTO 8080')
})

//----METODO DE SAVE SESSION CON RUTA(path) y TIEMPO (ttl)
app.use(
  session({
    //store: new FileStore({ path: './sesiones', ttl: 10, retries: 0 }),
    //store:  connectMongo.create ({mongoUrl: 'mongodb://127.0.0.1:27017/sesiones'}),
    store: connectMongo.create ({
          mongoUrl: 'mongodb+srv://ex888gof:2013facu@cluster0.mnmsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
          mongoOptions: advanceOptions
    }),
    secret: 'secreto',
    resave: true,
    saveUninitialized: true,
  })
)

/*
//----METODO LOGING con CONTADOR------------------
app.get('/root', (req, res) => {
  if (!req.session.nombre) {
    req.query.nombre
      ? (req.session.nombre = req.query.nombre)
      : (req.session.nombre = 'anonimo')
  }
  if (req.session.contador) {
    req.session.contador++
    res.send(
      `${req.session.nombre} ud ha visitado el sitio ${req.session.contador} veces`
    )
  } else {
    req.session.contador = 1
    res.send('te damos la bienvenida ' + req.session?.nombre)
  }
})
*/

//----METODO LOGOUT que destruye la sesion--------
app.get('/reiniciar', (req, res) => {
    req.session.destroy((err) => {
      if (!err) res.send('Logout ok!')
      else res.send({ status: 'logout Error', error: err })
    })
  })
  

//----METODO DE LOGIN-----------------------------
app.get('/login', (req, res) => {
  // const { username, password } = req.query

  req.session.user = req.query.user
  if (req.session.user === 'pepe') {
    req.session.admin = true
  }
  res.send('login success!')
})


//-----METODO DE ACCESO A RUTA PRIVADO CON FUNCION---
function auth(req, res, next) {
  if (req.session?.user === 'pepe' && req.session?.admin) {
    return next()
  }
  return res.status(401).send('error de autorización!')
}

app.get('/privado', auth, (req, res) => {
  res.send('si estas viendo esto es porque ya te logueaste!')
})


/*
app.get('/login', (req, res) => {
  const { username, password } = req.queryreq.session.user = req.query.userif (req.session.user === 'pepe') 
  {req.session.admin = true}res.send('login success!')
})

function auth(req, res, next) {
  if (req.session?.user === 'pepe' && req.session?.admin) {
    return next()
  }return res.status(401).send('error de autorización!')
}

app.get('/privado', auth, (req, res) => {
  res.send('si estas viendo esto es porque ya te logueaste!')
})

*/