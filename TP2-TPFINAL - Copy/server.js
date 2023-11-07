import express from 'express'
import Router from './router/productos.js'
import RouterClientes from './router/clientes.js'
import passport from 'passport'
import session from 'express-session'
import PassportConfig from './passport.js' 
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


app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
      }

      req.login(user, (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
          console.log(req.user)
        return res.json({ message: 'Login exitoso!!', user });
      });
    })(req, res, next);
  })

  app.get('/perfil', 
  passport.authenticate('local'), 
  (req, res) => {
    const perfilCliente = req.user;
    console.log(req.user)
    if (perfilCliente) {  
      res.json({ message: 'Perfil exitoso', perfil: perfilCliente });
    } else {
      res.status(401).json({ message: 'Se requiere login' });
    }
  }
);

 const port = 3009
 app.listen(port , () => console.log(`el servidor esta escuchando en el port ${port}`)) 





   
