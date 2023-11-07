
import ServicioCliente from '../servicio/clientes.js';

class ControladorClientes {
  constructor() {
    this.servicio = new ServicioCliente();
  }

  leerClientes = (req, res) => {
    const { id } = req.params;
    const clientes = this.servicio.leerClientes(id);
    res.json(clientes);
  }

  registrarCliente = (req, res) => {
    const cliente = req.body;
    const clienteCreado = this.servicio.registrarCliente(cliente);
    res.json(clienteCreado);
  }

  actualizarCliente = (req, res) => {
    const { id } = req.params;
    const nuevoCliente = req.body;
    const cliente = this.servicio.actualizarCliente(id, nuevoCliente);

    if (cliente != null) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  }

  borrarCliente = (req, res) => {
    const { id } = req.params;
    const cliente = this.servicio.borrarCliente(id);
    if (cliente != null) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  }


}


export default ControladorClientes;
