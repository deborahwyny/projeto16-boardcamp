import { Router } from "express"
import games from "./games.routes.js"
import clientesRoutes from "./clientes.routes.js"

const router = Router()

router.use(games)
router.use(clientesRoutes)

export default router