
import Servicio from '../servicio/productos.js'

class Controlador {

    constructor () {
        this.servicio = new Servicio()

    }
    leerProductos = (req, res) => {
        const {id} = req.params
        const producto = this.servicio.leerProductos(id)
        res.json(producto)
    }
    
    crearProducto = (req, res) => {
        const producto = req.body
        const productoCreado = this.servicio.crearProducto(producto)
        res.json(productoCreado)
    }
    
    
         actualizarProducto = (req, res) => {
            const  {id} = req.params;
            const nuevoProducto = req.body;
            const producto = this.servicio.actualizarProducto(id, nuevoProducto)
    
            if (producto != null) {
                res.json(producto)
            }
            else {
                res.status(404).json({ error: "Producto no encontrado" });
             }
        }
   borrarProducto = (req, res) => {
        const {id} = req.params
        const producto = this.servicio.borrarProducto(id)
    if (producto != null) {
        res.json(producto)
    }
     else {
        res.status(404).json({ error: "Producto no encontrado" });
     }
    
    }
    
    calcularProductos = (req, res) => {
        const {tipo} = req.params
        const resultado = this.servicio.calcularProductos(tipo)
        res.json(resultado)
    }
}



export default Controlador