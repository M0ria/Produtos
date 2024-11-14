
import express from "express";
import cors from 'cors';
import { router } from "./router/product.routes"

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(port, () => console.log(`Servidor Rodando na porta: ${port}`))
