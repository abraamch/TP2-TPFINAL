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

// actualizacion total

//router.put('/productos/:id?' , (req, res) => {
  //  const {id} = req.params
    //const producto = req.body

    //const index = productos.findIndex(producto => producto.id == id) 
    //if (index != -1 )
   // {
     //   productos.splice(index, 1, producto)
    //} else { 
      //  productos.push(producto)
   // }
//})

//------------------------
// spread operator para clonar el objeto y object merge para cambiar algunas de las propiedades del objeto anterior.