//import Modelo from '../modelo/productos.js'
import Modelo from '../modelo/productosdb.js'

class Servicio {

    constructor() 
    {
        this.modelo = new Modelo()
    }
     leerProductos = async (id) => {  
        const productos = await this.modelo.leerProductos(id) 
        return productos
    }
    
    buscar = async (nombre) => {
         return await this.modelo.buscar(nombre)
    }
     crearProducto = async (producto) => {
         return await this.modelo.crearProducto(producto)
    }
     actualizarProducto = async (id , producto) => {
         return await this.modelo.actualizarProducto(id , producto)
    }
     borrarProducto = async (id) => {
    return await this.modelo.borrarProducto(id)
    }

    calcularProductos = async (tipo) => {
        let resultado;
        const productos = await this.modelo.obtenerProductos();
      
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