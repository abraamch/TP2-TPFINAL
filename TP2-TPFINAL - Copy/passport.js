import bcrypt from 'bcrypt'
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import ServicioCliente from './servicio/clientes.js';
import ControladorClientes from './controlador/clientes.js';

class PassportConfig {
  constructor() {
    passport.use(
      new LocalStrategy(
        {
          usernameField: 'mail', 
          passwordField: 'contrasena', 
        },
        this.authenticateUser.bind(this)
      )
    );

    passport.serializeUser(this.serializeUser.bind(this));
    passport.deserializeUser(this.deserializeUser.bind(this));
  }

  async authenticateUser(mail, contrasena, done) {
    const servicioCliente = new ServicioCliente()
    const cliente = servicioCliente.encontrarPorMail(mail);

    if (!cliente) {
      return done(null, false, { message: 'Correo electrónico incorrecto.' });
    }

    if (await bcrypt.compare( cliente.contrasena , contrasena)) {
      return done(null, false, { message: 'Contraseña incorrecta.' });
    }

    return done(null, cliente);
  }

  serializeUser(cliente, done) {
    done(null, cliente.id);
  }

  deserializeUser(id, done) {
    const servicioCliente = new ServicioCliente();
    const cliente = servicioCliente.encontrarPorId(id);
    done(null, cliente);
  }

  initialize() {
    return passport.initialize();
  }

  session() {
    return passport.session();
  }
}

export default PassportConfig;