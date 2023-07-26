import { Router } from "express"
import { getClientes, getClientesId, postClientes, putClientes } from "../controllers/clientes.controllers.js"
import { validateSchemma } from "../middlewares/validation.schemma.js"
import { schemmaClientes } from "../schemmas/clientes.schemma.js"



const clientesRoutes = Router()
clientesRoutes.get("/customers", getClientes)
clientesRoutes.post("/customers",validateSchemma(schemmaClientes), postClientes)
clientesRoutes.get("/customers/:id", getClientesId)
clientesRoutes.put("/customers/:id", validateSchemma(schemmaClientes), putClientes)


export default clientesRoutes