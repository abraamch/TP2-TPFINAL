import { ObjectId } from 'mongodb';
import CnxMongoDB from './DBMongo.js';
import bcrypt from 'bcrypt'
class ClientesModelo {
  constructor() {
    this.collectionName = 'clientes';
  }

  async conectar() {
    await CnxMongoDB.conectar();
    this.collection = CnxMongoDB.db.collection(this.collectionName);
  }

  async desconectar() {
    await CnxMongoDB.desconectar();
  }

  async leerClientes(id) {
    await this.conectar();
    try {
      if (id) {
        return await this.collection.findOne({ _id: new ObjectId(id) }) || {};
      } else {
        return await this.collection.find().toArray();
      }
      
    } catch(e) {
      return e
    }
    finally {
      await this.desconectar();
    }
  }

  async registrarCliente(cliente) {
    await this.conectar();
    try {
      const hashedPassword = await bcrypt.hash(cliente.contrasena, 10);
      cliente.contrasena = hashedPassword
        cliente.productos = [];
        const result = await this.collection.insertOne(cliente);
        return cliente;
    } finally {
        await this.desconectar();
    }
}


  async encontrarPorMail(mail) {
    await this.conectar();
    try {
      return await this.collection.findOne({ mail }) || {};
    } finally {
      await this.desconectar();
    }
  }

  async encontrarPorId(id) {
    await this.conectar();
    try {
      return await this.collection.findOne({ _id: new ObjectId(id) }) || {};
    } finally {
      await this.desconectar();
    }
  }


async actualizarCliente(id, cliente) {
  await this.conectar();
  try {
      await this.collection.updateOne(
          { _id: new ObjectId(id) },
          { $set: cliente }
      );
      return await this.leerClientes(id);
  } finally {
      await this.desconectar();
  }
}




  async borrarCliente(id) {
    await this.conectar();
    try {
      const result = await this.collection.findOneAndDelete({ _id: new ObjectId(id) });
      return result.value || null;
    } finally {
      await this.desconectar();
    }
  }
}

export default ClientesModelo;
