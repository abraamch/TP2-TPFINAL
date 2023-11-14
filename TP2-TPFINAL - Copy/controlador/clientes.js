
import ServicioCliente from '../servicio/clientes.js';

class ControladorClientes {
  constructor() {
    this.servicio = new ServicioCliente();
  }

  leerClientes = async (req, res) => {
    const { id } = req.params;
    const clientes = await this.servicio.leerClientes(id);
    res.json(clientes);
  }

  registrarCliente = async (req, res) => {
    const cliente = req.body;
    const clienteCreado = await this.servicio.registrarCliente(cliente);
    res.json(clienteCreado);
  }

  actualizarCliente = async (req, res) => {
    const { id } = req.params;
    const nuevoCliente = req.body;
    const cliente = await this.servicio.actualizarCliente(id, nuevoCliente);

    if (cliente != null) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  }


  borrarCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await this.servicio.borrarCliente(id);
    if (cliente != null) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  }


}


export default ControladorClientes;
