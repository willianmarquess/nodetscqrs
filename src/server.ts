import express from 'express'
import { rotasController } from './routes/RotasController';

const app = express();
const porta = 3000;

app.use(express.json());
app.use(rotasController);

app.listen(porta, () => {
    console.log(`Servidor rodando no endereço: http://localhost:${porta}`);
});
