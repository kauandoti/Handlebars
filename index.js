const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('Handlebars', exphbs.engine())

app.get('/', (requisicao, resposta) => {
    resposta.send("Olá, Mundo")
})

app.listen(3000, () => {
    console.log("Servidor Rodando na Porta 3000!")
})