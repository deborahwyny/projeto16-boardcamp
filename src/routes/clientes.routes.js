import { Router } from "express"
import { getClientes, getClientesId, postClientes } from "../controllers/clientes.controllers.js"
import { validateSchemma } from "../middlewares/validation.schemma.js"
import { schemmaClientes } from "../schemmas/clientes.schemma.js"



const clientesRoutes = Router()
clientesRoutes.get("/customers", getClientes)
clientesRoutes.post("/customers",validateSchemma(schemmaClientes), postClientes)
clientesRoutes.get("/customers/:id", getClientesId)


export default clientesRoutes