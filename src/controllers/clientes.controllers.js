import { db } from "../database/database.connection.js"

export async function getClientes (req, res){

    try {

    const listaClientes = await db.query('SELECT * from customers;')
    res.send(listaClientes.rows[0]);

    } catch (err){
        res.status(500).send(err.message)

    }

}


export async function postClientes (req, res){

    const {name, phone,cpf, birthday } = req.body

    try {

        if(!name || !phone || !cpf || !birthday){
            return res.status(400).send("preencha todos os campos")
        }

        const verificadorCpf = await db.query('SELECT * from customers WHERE cpf = $1;', [cpf])
            if (verificadorCpf.rows && verificadorCpf.rows.length !== 0) {
                return res.status(409).send("cliente já existente")
            }


        const inserirCliente = await db.query('INSERT into customers(name, phone,cpf, birthday) VALUES($1, $2, $3, $4);', [name, phone,cpf, birthday])
        res.send(201)

        }

       



     catch (err){
        res.status(500).send(err.message)

    }

}