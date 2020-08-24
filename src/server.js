const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")

// configurar pasta public
server.use(express.static("public"))

// habilitar o body da req
server.use(express.urlencoded({extended:true}))



// configurar engine
const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache:true
})
// configurar caminhos
server.get("/", (req,res) => {
    return res.render("index.html", {title: "Seu marketplace de coleta de resíduos"})
})

server.get("/create-point", (req,res) => {
    
    console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req,res) => {
    
    //req.body corpo do nosso formulário
    console.log(req.body)

    //inserir dados no db
    const query = 
`
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
`

const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
]

function afterInsertData(err){
    if(err){
        console.log(err)
        return res.send("Erro no cadastro!")
    }

    console.log("cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", {saved:true})
}

// função afterInsertData executada no final da execução da query
// o que estiver dentro dela só será executado no final
// o que estiver abaixo dela será executado em seguida    
db.run(query,values, afterInsertData)

})

server.get("/search", (req,res) => {
    
    const search = req.query.search

    if(search == "") {
        //pesquisa vazia
        return res.render("search-results.html", {places:null})
    }

    db.all(`select * from places where  city LIKE  '%${search}%' `, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Registros")
        console.log(rows)
        // mostrar a página html com os dados do bd
        return res.render("search-results.html", {places:rows})
    })
})

// ligar o servidor
server.listen(3000)

