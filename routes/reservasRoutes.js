import express from 'express';
const reservasRouter = express.Router();
import { addReserva, buscarReservas, buscarReservaPorId, atualizarReserva, deleteReserva } from '../controllers/reservasController.js';

reservasRouter.post('/', addReserva)
reservasRouter.get('/', buscarReservas)
reservasRouter.get('/:id', buscarReservaPorId)
reservasRouter.put('/:id', atualizarReserva)
reservasRouter.delete('/:id', deleteReserva)

export {reservasRouter}