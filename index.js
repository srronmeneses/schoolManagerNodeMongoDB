require("dotenv").config()

const {
  environmentsUtils: { validateRequiredEnvs },
} = require("./utils")

// ? requiredEnvs ALMACENA TODAS LAS VARIABLES DE ENTORNO
// ? CONFIGURADAS EN NUESTRO ARCHIVO .env
const requiredEnvs = ["PORT", "MONGO_URI"]
//  ? VALIDAMOS QUE LAS VARIABLES DE ENTORNO EXISTAN
//  ? CASO CONTRAIO NOS RETORNA UN ERROR.
validateRequiredEnvs(requiredEnvs)

// ? CONEXION A LA BASE DE DATOS
const { mongoDBhelpers } = require("./helpers")
mongoDBhelpers.connect()
// ? CIERRA LA CONEXION CON EL DATABASE EN MONGO ATLAS
process.on("SIGINT", () => {
  mongoDBhelpers.disconnect().then((connectionState) => {
    console.log(`readyState ${connectionState}: Database disconnect..!`)
    console.log("Closing process")
    process.exit(0)
  })
})
