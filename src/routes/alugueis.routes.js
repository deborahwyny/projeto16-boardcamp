import { Router } from "express"
import { getAlugueis } from "../controllers/alugueis.controllers.js"


const alugueisRoutes = Router()
alugueisRoutes.get("/rentals",getAlugueis)


export default alugueisRoutes