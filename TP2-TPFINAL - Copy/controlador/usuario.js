import ServicioCliente from "../servicio/clientes.js";
import Servicio from "../servicio/productos.js";
import passport from "passport";

class ControladorUsuario {
constructor() {
    this.servicio = new Servicio()
    this.servicioCliente = new ServicioCliente()
}
login = (req, res, next) => {
    if(!req.isAuthenticated()) {
      passport.authenticate('local', (err, cliente) => {
        if (err) {
          return next(err);
        }
        if (!cliente) {
          return res.status(401).send( 'Usuario o contraseña incorrectos');
        }
  
        req.login(cliente, (loginErr) => {
          if (loginErr) {
            return next(loginErr);
          }
            
          return res.send('Login exitoso!!');
        });
      })(req, res, next);
    } else {
      return res.send('ya iniciaste sesion')
    } 
      
    }
  
    perfil = 
    (passport.authenticate('local'), 
    (req, res) => {
      const perfilCliente = req.user;
      console.log(req.user)
      if (perfilCliente) {  
        res.json({perfil: perfilCliente });
      } else {
        res.status(401).json('Se requiere login' );
      }
    }
  );
  
  logout = (req, res) => {
    if (req.isAuthenticated()) {
      req.logOut(function(err) {
        if (err) {
          res.send('Error');
        } else {
          res.send('Sesión cerrada correctamente');
        }
      });
    } else {
      res.send('No se ha iniciado sesión');
    }
  };
    
  comprarProducto = async (req, res) => {
    if (req.isAuthenticated()) {
      const { nombre } = req.body;
      const productoComprado = await this.servicio.buscar(nombre);
     
      if (productoComprado != null) {
        
       
        const cliente = await this.servicioCliente.comprarPorId(req.user, productoComprado);
        
        if (cliente != null) {
         
          res.json(cliente);
        } else {
          res.status(400).send('Error: Cliente no encontrado');
        }
      } else {
        res.status(400).send('Error: El producto no existe');
      }
    } else {
      res.send('Debes iniciar sesión para comprar');
    }
  };
  
} export default ControladorUsuario