import cors from "cors"
import express from "express"
import dotenv from "dotenv"


//// configs
app.use(cors())
app.use(express.json())
dotenv.config()






// Deixa o app escutando, à espera de requisições
const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))