import express from 'express'
import ControladorUsuario from '../controlador/usuario.js'


class RouterUsuario { 
  constructor() {
    this.router = express.Router()
    this.controlador = new ControladorUsuario()
  }
  

start() {
  
this.router.post('/login' , this.controlador.login)
  
this.router.get('/' , this.controlador.perfil)

this.router.post('/comprar' , this.controlador.comprarProducto)

this.router.get('/logout', this.controlador.logout)

this.router.get('/vercompras', this.controlador.verCompras)
return this.router
}
  
}


export default RouterUsuario