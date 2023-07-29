import { Router } from "express"
import { deleteAlugueis, finalizarAluguel, getAlugueis, postAlugueis } from "../controllers/alugueis.controllers.js"


const alugueisRoutes = Router()
alugueisRoutes.get("/rentals",getAlugueis)
alugueisRoutes.post("/rentals",postAlugueis)
alugueisRoutes.post("/rentals/:id/return", finalizarAluguel)
alugueisRoutes.delete("/rentals/:id", deleteAlugueis)



export default alugueisRoutes