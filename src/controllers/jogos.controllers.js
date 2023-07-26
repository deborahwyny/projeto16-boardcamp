import { db } from "../database/database.connection.js"


export async function getGames (req, res){

    try {
        const listaJogos = await db.query('SELECT * from games;')
        res.send(listaJogos.rows[0])

    } catch (err){
        res.status(500).send(err.message)

    }

}

export async function postGames (req, res){

    const {name, image, stockTotal, pricePerDay} = req.body

    try {

        if (!name || !stockTotal || !pricePerDay) {
            return res.status(400).send("preencha todos os campos")
        }

        const verificarTitulo = await db.query('SELECT * from games WHERE name = $1;', [name])
        if (verificarTitulo.rows && verificarTitulo.rows.length !== 0) {
            return res.status(409).send("Jogo já existe")
        }

        
        const inserirJogos = await db.query('INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES($1, $2, $3, $4);', [name, image, stockTotal, pricePerDay])
        res.send(201)

    } catch (err){
        res.status(500).send(err.message)
    }

}