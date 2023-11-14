import ModeloClientes from '../modelo/clientesdb.js'

class ServicioCliente {

    constructor() 
    {
        this.modelo = new ModeloClientes
    }
     leerClientes = async (id) => {  
        const clientes = await this.modelo.leerClientes(id) 
        return clientes
    }
    
     registrarCliente = async (cliente) => {
         return await this.modelo.registrarCliente(cliente)
    }
     encontrarPorMail = async (mail) => {
    return await this.modelo.encontrarPorMail(mail)
}
     encontrarPorId = async (id) => {
    return await this.modelo.encontrarPorId(id)
}
     actualizarCliente = async (id , cliente) => {
         return await this.modelo.actualizarCliente(id , cliente)
    }
     borrarCliente = async (id) => {
    return await this.modelo.borrarCliente(id) 
    }

    comprarPorId = (id, producto) => {
        const cliente = this.modelo.encontrarPorId(id)

          if(cliente){
            cliente.productos = cliente.productos || []
            cliente.productos.push(producto)
            this.modelo.actualizarCliente(cliente.id, cliente);
          }
          return cliente 
    }
}


export default ServicioCliente