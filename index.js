import express from "express"
import mysql2 from "mysql2"

const app = express()

app.use(express.json())

app.get("/", (request, response)=> {
    response.json({
        message: "Servidor do ToDo"
    })
})

app.post("/create-task", (request, response) => {
    const {description, status} = request.body

    const insertCommand = "INSERT INTO ToDo_CatarinaPalomares(description, status) VALUES (?, ?)"

    sql.query(insertCommand, [description, status], (error) => {
        if(error){
            console.log(error)
            return
        }

        response.status(201).json({
            message: "Tarefa criada com sucesso"
        })
    })
})

app.listen(3000, () => console.log("Servidor ONLINE"))

const sql = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "aluno_projetos",
    password: "aluno@projeto",
    database: "todo_03mb"
})