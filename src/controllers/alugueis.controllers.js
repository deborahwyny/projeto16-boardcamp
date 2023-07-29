import { db } from "../database/database.connection.js"
import dayjs from "dayjs"


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

        console.log("oioioi",listaAlugueis.rows)


        res.send(listaAlugueis)

    } catch (err){
        res.status(500).send(err.message)

    }

}


export async function postAlugueis (req, res){

    const { customerId, gameId, daysRented } = req.body

    let returnDate = null
        let delayFee = null
        let rentDate = dayjs().format('YYYY-MM-DD')
        if(daysRented <= 0) return res.sendStatus(400)


    try {

        const verificadorCliente = await db.query('SELECT * FROM customers WHERE id=$1;', [customerId])
        if(!verificadorCliente) return res.sendStatus(400)

        const verificadorJogo = await db.query('SELECT * FROM games WHERE id=$1;', [gameId])
        if(!verificadorJogo) return res.sendStatus(400)


        let originalPrice = verificadorJogo.rows[0].pricePerDay * daysRented



        const jogoDisponivel = await db.query('SELECT * FROM rentals WHERE "gameId" = $1 AND "returnDate" is null;', [gameId,])
        if (jogoDisponivel.rows.length >= verificadorJogo.rows[0].stockTotal) return res.sendStatus(400)

        await db.query(
            `INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES ($1, $2, $3, $4, $5, $6, $7);`,
            [customerId, gameId, rentDate, daysRented, returnDate, originalPrice, delayFee])

      

        res.send(201)




    } catch (err){
        res.status(500).send(err.message)

    }

}