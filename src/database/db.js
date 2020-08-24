// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database.db")

// exportar para usar em qualquer lugar
module.exports = db

// utilizar o objeto de banco de dados para operações
// db.serialize( () => {
//     //criar uma tabela comandos SQL
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            image TEXT,
//            name TEXT,
//            address TEXT,
//            address2 TEXT,
//            state TEXT,
//            city TEXT,
//            items TEXT
//         ); 
//     `)
// // inserir dados
// const query = 
// `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
// `

// const values = [
//     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//     "Colectoria",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
// ]

// const values2 = [
//     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
// ]

// function afterInsertData(err){
//     if(err){
//         return console.log(err)
//     }

//     console.log("cadastrado com sucesso")
//     console.log(this)
// }

// db.run(query,values2, afterInsertData)

// db.all(`select * from places`, function(err, rows){
//     if(err){
//         return console.log(err)
//     }

//     console.log("Registros")
//     console.log(rows)
// })

// db.run(`delete from places where id = ?`,[3], function(err){
//     if(err){
//         return console.log(err)
//     }

//     console.log("Registro deletado com sucesso!")
// })

// })

db.serialize( () => {
    db.all(`select * from places`, (err, rows) => {
        console.log(rows);
    });
    
})
