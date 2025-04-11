const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, '/test'), (error) => { 
    if(error){
        console.log('Erro: ', error)
    }

    console.log('Pasta criada com sucesso!')
})

// Criar um arquivo
fs.writeFile(
    path.join(__dirname, "/test", "test.txt"),
    "hello node!",
    (error) => {
    if(error) {
        return console.log("Error: ", error)
    }

    console.log("Arquivo criado com sucesso!")
})