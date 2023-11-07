import ClientesModelo from '../modelo/clientes.js'

class ServicioCliente {

    constructor() 
    {
        this.modelo = new ClientesModelo()
    }
     leerClientes = (id) => {  
        const clientes = this.modelo.leerClientes(id) 
        return clientes
    }
    
     registrarCliente = (cliente) => {
         return this.modelo.registrarCliente(cliente)
    }
     encontrarPorMail = (mail) => {
    return this.modelo.encontrarPorMail(mail)
}
encontrarPorId = (id) => {
    return this.modelo.encontrarPorId(id)
}
     actualizarCliente = (id , cliente) => {
         return this.modelo.actualizarCliente(id , cliente)
    }
     borrarCliente = (id) => {
    return this.modelo.borrarCliente(id) 
    }

    

}


export default ServicioCliente