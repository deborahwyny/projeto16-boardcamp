import { Router } from "express"

const gamesRouter = Router()

gamesRouter.get("/games", getGames)


export default games
