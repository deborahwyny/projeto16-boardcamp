import { db } from "../database/database.connection.js";


export async function getGames (req, res){

    try {
        const listaJogos = await db.query('SELECT * from games;')
        res.send(listaJogos.rows[0]);

    } catch (err){
        res.status(500).send(err.message)

    }

}

export async function postGames (req, res){

    const {name, image, stockTotal, pricePerDay} = req.body

    try {

        const inserirJogos = await db.query('INSERT into games (name, image, stockTotal, pricePerDay) VALUES($1, $2, $3, $4);', [name, image, stockTotal, pricePerDay])
        res.send(201)

    } catch (err){
        res.status(500).send(err.message)
    }

}