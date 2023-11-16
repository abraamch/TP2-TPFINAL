
import Servicio from '../servicio/productos.js'

class Controlador {

    constructor () {
        this.servicio = new Servicio()

    }
    leerProductos = async (req, res) => {
        const {id} = req.params
        const producto = await this.servicio.leerProductos(id)
        res.json(producto)
    }
    
    crearProducto = async (req, res) => {
        const producto = req.body
        const productoCreado = await this.servicio.crearProducto(producto)
        res.json(productoCreado)
    }
    
    
         actualizarProducto = async (req, res) => {
            const  {id} = req.params;
            const nuevoProducto = req.body;
            const producto = await this.servicio.actualizarProducto(id, nuevoProducto)
    
            if (producto != null) {
                res.json(producto)
            }
            else {
                res.status(404).json({ error: "Producto no encontrado" });
             }
        }
   borrarProducto = async (req, res) => {
        const {id} = req.params
        const producto = await this.servicio.borrarProducto(id)
    if (producto != null) {
        res.json(producto)
    }
     else {
        res.status(404).json({ error: "Producto no encontrado" });
     }
    
    }
    
    calcularProductos = async (req, res) => {
        const {tipo} = req.params
        const resultado = await this.servicio.calcularProductos(tipo)
        res.json(resultado)
    }
}



export default Controlador