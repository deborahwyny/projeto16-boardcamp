import { Router } from "express"
import { getGames } from "../controllers/jogos.controllers"
import games from "./games.routes.js"

const router = Router()

router.use(games)

export default router