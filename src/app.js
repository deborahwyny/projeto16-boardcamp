import cors from "cors"
import express, { Router } from "express"
import dotenv from "dotenv"
import { getGames } from "./controllers/jogos.controllers.js"
import games from "./routes/games.routes.js"
import router from "./routes/index.routes.js"


//// configs
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(router)







// Deixa o app escutando, à espera de requisições
const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))