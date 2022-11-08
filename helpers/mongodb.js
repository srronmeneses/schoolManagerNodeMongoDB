const mongoose = require("mongoose")
const { mongoURI } = require("../config")

// ? VERIFICA EL ESTADO DE LA CONEXION CON NUESTRA DATABASE
const checkConnection = () => {
  return mongoose.connection.readyState
}
//  ? REALIZAMOS LA CONEXION CON EL DATABASE
const connect = async () => {
  try {
    if (!checkConnection()) {
      console.log(
        "readyState",
        checkConnection() + 2,
        ": Connecting to DataBase.."
      )
      await mongoose.connect(mongoURI)
    }
    console.log("readyState", checkConnection(), ": Connected successfully!")
    // ? Una vez que se establece la conexion con la base de datos podemos iniciar el servidor
    require(`../server`)
  } catch (err) {
    console.error(err)
  }
}
// ? DESCONECTAMOS LA DATABASE
const disconnect = async () => {
  await mongoose.connection.close()
  return checkConnection()
}

module.exports = {
  checkConnection,
  connect,
  disconnect,
}
