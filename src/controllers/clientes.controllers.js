import { db } from "../database/database.connection.js"

export async function getClientes (req, res){

    try {

    const listaClientes = await db.query('SELECT * from customers;')
    res.send(listaClientes.rows)

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


export async function getClientesId (req, res){

    const{id} = req.params

    try {

        const verificadorId = await db.query('SELECT * from customers WHERE id = $1;', [id])
        if (verificadorId.rows.length === 0) {
            return res.status(404).send("Cliente não encontrado");
          }

        res.send(verificadorId.rows[0])


    } catch (err){
        res.status(500).send(err.message)

    }

}


export async function putClientes (req, res){
    const { name, phone, cpf, birthday } = req.body
    const{id} = req.params


    try {

      
        const cpfVerificador = await db.query('SELECT * from customers WHERE cpf=$1 AND id!=$2;', [cpf,id])
        if (cpfVerificador.rowCount) return res.sendStatus(409)
        
        await db.query(`UPDATE customers SET "name"=$1, "phone"=$2, "cpf"=$3, "birthday"=$4 WHERE "id"=$5`,[name, phone, cpf, birthday, id])


        res.sendStatus(200)
    
    } catch (err){
        res.status(500).send(err.message)

    }

}