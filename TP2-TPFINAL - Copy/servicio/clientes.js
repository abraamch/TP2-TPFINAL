//import ClientesModelo from '../modelo/clientes.js'
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

    async comprarPorId(cliente, producto) {
        try {
            const id = cliente._id; 
            console.log(cliente);
            console.log(producto);
    
            cliente.productos.push(producto.nombre);
    
            
            const clienteActualizado = await this.modelo.actualizarCliente(id, cliente);
    
            return clienteActualizado;
        } catch (error) {
            console.error(error);
            throw new Error('Error');
        }
    }
    
    
    
}


export default ServicioCliente