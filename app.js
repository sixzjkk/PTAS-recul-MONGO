import express from 'express';
import mongoose from 'mongoose';
import { reservasRouter } from './routes/reservasRoutes.js';

const app = express()
app.use(express.json())

app.use('/reservas', reservasRouter)

mongoose.connect('mongodb://localhost:27017/CRUDreserva').then(() => {
    console.log('Conectado ao banco de dados')
}).catch ( err => {
    console.error('Erro ao conectar ao banco de dados: ', err)
})

app.listen(3300, () => {
    console.log('Servidor rodando na porta 3300 :)')
})