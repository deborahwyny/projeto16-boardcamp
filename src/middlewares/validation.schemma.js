import { schemmaGame } from "../schemmas/games.schemmas.js"

export function validateSchemma (schemma){

    return (req, res, next) =>{
        const validation = schemma.validate(req.body, {abortEarly: false})

    if (validation.error) {
        const erros = validation.error.details.map(detail => detail.message)
        return res.status(400).send(erros)
    }

    next()
    }
    
}