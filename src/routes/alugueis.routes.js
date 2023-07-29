import { Router } from "express"
import { getAlugueis, postAlugueis } from "../controllers/alugueis.controllers.js"


const alugueisRoutes = Router()
alugueisRoutes.get("/rentals",getAlugueis)
alugueisRoutes.post("/rentals",postAlugueis)



export default alugueisRoutes