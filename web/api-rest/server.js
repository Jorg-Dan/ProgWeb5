import app from "./src/app.js"
import conexao from './infra/conexao.js'
const port = 3000;

conexao.connect((erro) => {
    if (erro) {
        console.log("Erro na conexão")
    } else {
        console.log("Conexão com Sucesso")
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    }
    
})


