//importar a biblioteca express
import express from "express"; //importar o express 
import type { Request, Response } from "express"; //importar tipos Request e Response, é diferente de import express porque é só tipos e express é um valor

import { AppDataSource } from "./data-source.js"; //importar a conexão com o banco de dados

//criar a aplicação express
const app = express();

AppDataSource.initialize().then(() => { //inicializar a conexão com o banco de dados
    console.log("Data Source has been initialized!"); //se der certo, mostrar mensagem no console
}).catch((err ) => { //se der errado, mostrar o erro no console
    console.error("Error during Data Source initialization:", err);
});

//definir uma rota para o endpoint raiz
app.get("/", (req: Request, res: Response) => { //se não colocar os tipos Request e Response, o TS não reconhece os métodos de req e res e se não add uma rota, dá erro pois ele espera que tenha pelo menos uma rota. Apenas o método get pode ser acesado pelo navegador
    res.send("Welcome to my API");
})

//iniciar o servidor na porta 8080 
app.listen(8080, () =>{
    console.log("Servidor rodando na porta 8080: http://localhost:8080/")
});