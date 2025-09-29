//importar a biblioteca express
import express from "express"; //importar o express 
import { AppDataSource } from "./data-source.js"; //importar a conexão com o banco de dados
//criar a aplicação express
const app = express();
AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!"); //se der certo, mostrar mensagem no console
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
//definir uma rota para o endpoint raiz
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});
//iniciar o servidor na porta 8080 
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080: http://localhost:8080/");
});
//# sourceMappingURL=index.js.map