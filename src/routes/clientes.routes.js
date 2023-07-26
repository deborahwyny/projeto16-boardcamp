import { Router } from "express"
import { getClientes, postClientes } from "../controllers/clientes.controllers.js"
import { validateSchemma } from "../middlewares/validation.schemma.js"
import { schemmaClientes } from "../schemmas/clientes.schemma.js"



const clientesRoutes = Router()
clientesRoutes.get("/customers", getClientes)
clientesRoutes.post("/customers",validateSchemma(schemmaClientes), postClientes)


export default clientesRoutes