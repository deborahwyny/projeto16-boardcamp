import { Router } from "express"
import { getGames } from "../controllers/jogos.controllers.js"

const gamesRouter = Router()
gamesRouter.get("/games", getGames)


export default gamesRouter


