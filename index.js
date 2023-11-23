const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('Handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static("public"))

app.get('/', (requisicao, resposta) => {
    resposta.render('home')
})

app.listen(3000, () => {
    console.log("Servidor Rodando na Porta 3000!")
})