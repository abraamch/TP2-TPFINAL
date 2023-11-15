import express from 'express'
import Router from './router/productos.js'
import RouterClientes from './router/clientes.js'
import session from 'express-session'
import PassportConfig from './passport.js' 
import RouterUsuario from './router/usuario.js'
const app = express()
const passportConfig = new PassportConfig();
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))
app.use(session({ secret: 'tu-clave-secreta', resave: false, saveUninitialized: false }));
app.use(passportConfig.initialize());
app.use(passportConfig.session());


app.use('/productos', new Router().start())
app.use('/clientes', new RouterClientes().start())
app.use('/usuario', new RouterUsuario().start())




 const port = 3007
 app.listen(port , () => console.log(`el servidor esta escuchando en el port ${port}`)) 





   
