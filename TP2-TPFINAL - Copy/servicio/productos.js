import Modelo from '../modelo/productos.js'

class Servicio {

    constructor() 
    {
        this.modelo = new Modelo()
    }
     leerProductos = (id) => {  
        const productos = this.modelo.leerProductos(id) 
        return productos
    }
    
     crearProducto = (producto) => {
         return this.modelo.crearProducto(producto)
    }
     actualizarProducto = (id , producto) => {
         return this.modelo.actualizarProducto(id , producto)
    }
     borrarProducto = (id) => {
    return this.modelo.borrarProducto(id)
    }

    calcularProductos = (tipo) => {
        let resultado;
        const productos = this.modelo.obtenerProductos();
      
        switch (tipo) {
          case 'promedio':
            if (productos.length > 0) {
              const precios = productos.map((producto) => parseFloat(producto.precio));
              const sumarPrecios = precios.reduce((acumulador, precio) => acumulador + precio, 0);
              resultado = sumarPrecios / precios.length;
            } else {
              resultado = 'No hay productos para calcular el promedio.';
            }
            break;
          default:
            resultado = 'Cálculo no soportado';
            break;
        }
      
        return { [tipo]: resultado };
      }
      

}


export default Servicio