
import { ObjectId } from 'mongodb';
import CnxMongoDB from './DBMongo.js';

class Modelo {
  constructor() {
    this.collectionName = 'productos';
  }

  async conectar() {
    await CnxMongoDB.conectar();
    this.collection = CnxMongoDB.db.collection(this.collectionName);
  }

  async desconectar() {
    await CnxMongoDB.desconectar();
  }

  async leerProductos(id) {
    await this.conectar();
    try {
      if (id) {
        return await this.collection.findOne({ _id: new ObjectId(id) }) || {};
      }
      return await this.collection.find().toArray();
    } finally {
      await this.desconectar();
    }
  }

  async buscar(nombre) {
    await this.conectar();
    try {
      return await this.collection.findOne({ nombre }) || null;
    } finally {
      await this.desconectar();
    }
  }

  async crearProducto(producto) {
    await this.conectar();
    try {
      const result = await this.collection.insertOne(producto);
      return producto
    } finally {
      await this.desconectar(); 
    }
  }

  async actualizarProducto(id, producto) {
    await this.conectar();
    try {
      producto._id = new ObjectId(id);
      const result = await this.collection.findOneAndReplace({ _id: new ObjectId(id) }, producto, { returnDocument: 'after' });
      return result.value || null;
    } finally {
      await this.desconectar();
    }
  }

  async borrarProducto(id) {
    await this.conectar();
    try {
      const result = await this.collection.findOneAndDelete({ _id: new ObjectId(id) });
      return result.value || null;
    } finally {
      await this.desconectar();
    }
  }
}

export default Modelo;
