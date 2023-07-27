import { Router } from "express"
import games from "./games.routes.js"
import clientesRoutes from "./clientes.routes.js"
import alugueisRoutes from "./alugueis.routes.js"

const router = Router()

router.use(games)
router.use(clientesRoutes)
router.use(alugueisRoutes)

export default router