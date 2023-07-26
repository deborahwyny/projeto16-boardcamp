import { Router } from "express"
import { getGames, postGames } from "../controllers/jogos.controllers.js"
import { validateSchemma } from "../middlewares/validation.schemma.js"
import { schemmaGame } from "../schemmas/games.schemmas.js"


const gamesRouter = Router()
gamesRouter.get("/games", getGames)
gamesRouter.post("/games", validateSchemma(schemmaGame), postGames)


export default gamesRouter


