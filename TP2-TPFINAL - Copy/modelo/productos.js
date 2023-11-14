
class Modelo {
 constructor() { 
    this.productos = [
        {id : 1 , nombre : 'Pokemon1' ,  precio : 50.5 , stock : 1 , tipo : 'pokemon1', color : 'rojo'},
        {id : 2 , nombre : 'Pokemon2' ,  precio : 45.5 , stock : 1 , tipo : 'pokemon2' , color : 'amarillo'},
        {id : 3 , nombre : 'Pokemon3' ,  precio : 66.5 , stock : 1 , tipo : 'pokemon3' , color : 'verde'},
        {id : 4, nombre : 'Pokemon4' ,  precio : 66.5 , stock : 1 , tipo : 'pokemon4', color : 'azul'},
    ]
 }
    
     leerProductos = (id) => {
        if (id) {
            const producto = this.productos.find( producto => producto.id == id ) 
               
                   return producto || {}
            } 
            return this.productos 
    }
     buscar  = nombre =>
    { 
        if (nombre)
   {
    const producto = this.productos.find( producto => producto.nombre == nombre )
    return producto.nombre || null

   }  else {
          return null
   }
        }
      crearProducto = (producto) => {
    
        producto.id = (this.productos[this.productos.length -1 ].id) + 1 
        this.productos.push(producto)
    
        return producto
    }
     actualizarProducto = (id , producto) => {
        producto.id = id;
    
        const index = this.productos.findIndex(producto => producto.id == id);
    
        if (index != -1) {
            const productoAnt = this.productos[index];
            const productoNuevo = { ...productoAnt, ...producto };
    
            this.productos.splice(index, 1, productoNuevo);
            return productoNuevo
        } else {
           
            return null
        }
    }
     borrarProducto = (id) => {
        const index = this.productos.findIndex(producto => producto.id == id) 
        if (index != -1 ) {
          producto = this.productos.splice(index, 1)[0]
          return producto
        } else { return null } 
       }
       async conectar() {
        await CnxMongoDB.conectar();
      }
    
      async desconectar() {
        await CnxMongoDB.desconectar();
      }
    
}

export default Modelo