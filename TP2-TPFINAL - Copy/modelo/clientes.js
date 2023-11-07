import bcrypt from 'bcrypt'

class ClientesModelo {
    constructor() { 
       this.clientes = [
           {id : 1 , nombre : 'Juan' ,  mail : 'juan@gmail.com' , contrasena: '1234', saldo : 100 , productos : []},
           {id : 2, nombre : 'Pedro' ,  mail : 'pedro@gmail.com' , contrasena: '1234', saldo : 100 , productos : []},
           {id : 3 , nombre : 'Martin' ,  mail : 'martin@gmail.com' , contrasena: '1234', saldo : 100 , productos : []},
           {id : 4 , nombre : 'Jose' ,  mail : 'jose@gmail.com' , contrasena: '1234', saldo : 100 , productos : []},
       ]
    }
       
        leerClientes = (id) => {
           if (id) {
               const cliente = this.clientes.find( cliente => cliente.id == id ) 
                  
                      return cliente || {}
               } 
               return this.clientes 
       }
        registrarCliente = (cliente) => {

           cliente.id = (this.clientes[this.clientes.length -1 ].id) + 1 

           this.clientes.push(cliente)
       
           return cliente
       }
       encontrarPorMail = (mail) =>
       {
        if (mail) {
            const cliente = this.clientes.find( cliente => cliente.mail == mail ) 
               
                   return cliente || {}
            }
       }
       encontrarPorId = (id) =>
       {
        if (id) {
            const cliente = this.clientes.find( cliente => cliente.id == id ) 
               
                   return cliente || {}
            }
       }
        actualizarCliente = (id , cliente) => {
           cliente.id = id;
       
           const index = this.clientes.findIndex(cliente => cliente.id == id);
       
           if (index != -1) {
               const clienteAnt = this.clientes[index];
               const clienteNuevo = { ...clienteAnt, ...cliente, };
       
               this.clientes.splice(index, 1, clienteNuevo);
               return clienteNuevo
           } else {
              
               return null
           }
       }
        borrarCliente = (id) => {
           const index = this.clientes.findIndex(producto => producto.id == id) 
           if (index != -1 ) {
             let cliente = this.clientes.splice(index, 1)[0]
             return cliente
           } else { return null } 
          }
   
   }
   
   export default ClientesModelo