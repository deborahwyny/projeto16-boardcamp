import { db } from "../database/database.connection.js"


export async function getAlugueis (req, res){

    try {
        
        const listaAlugueis = await db.query(`
        SELECT
          rentals.id,
          rentals."customerId",
          rentals."gameId",
          rentals."rentDate",
          rentals."daysRented",
          rentals."returnDate",
          rentals."originalPrice",
          rentals."delayFee",
          customers.name AS "nomeCliente",
          games.name AS "nomeJogo"
        FROM rentals
        JOIN customers ON rentals."customerId" = customers.id
        JOIN games ON rentals."gameId" = games.id;`)


        res.send(listaAlugueis.rows)

    } catch (err){
        res.status(500).send(err.message)

    }

}