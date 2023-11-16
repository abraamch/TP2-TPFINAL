import express from 'express'
import ControladorClientes from '../controlador/clientes.js'


class RouterClientes { 
  constructor() {
    this.router = express.Router()
    this.controlador = new ControladorClientes()
  }
  

start() {
  

  this.router.get('/:id?' , this.controlador.leerClientes)
  
  this.router.post('/' , this.controlador.registrarCliente)

this.router.put('/:id?', this.controlador.actualizarCliente)

this.router.delete('/:id?' , this.controlador.borrarCliente)

return this.router
}
  
}


export default RouterClientes

