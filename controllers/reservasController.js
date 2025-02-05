import { reservasModel } from "../models/reservas.js";

const addReserva = async (req, res) => {
    try{
        const {nome, data, evento} = req.body;
        if(!nome || !data || !evento) {
            return res.json({
                erro: true,
                mensagem: 'Todos os campos são obrigatórios'
            })
        }
        const reserva = new reservasModel({nome, data, evento})
        await reserva.save();
        res.json(reserva)
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
    }
}

const buscarReservas = async (req, res) => {
    try {
        const reservas = await reservasModel.find()
        res.json({
            erro: false,
            reservas
        })
    } catch (error) {
        res.json({
            erro: true,
            mensagem: 'Reserva não encontrada :('
        })
    }
}

const buscarReservaPorId = async (req, res) => {
    try{
        const {id} = req.params
        const reserva = await reservasModel.findById(id)
        if (!reserva) {
            return res.json({
                erro: true,
                mensagem: 'Reserva não encontrada :('
            })
        }
        res.json({
            erro: false,
            reserva
        })
    } catch (error) {
        res.json({
            erro: true,
            mensagem: 'Reserva não encontrada :('
        })
    }
}

const atualizarReserva = async (req, res) => {
    try {
        const {id} = req.params
        const reserva = await reservasModel.findByIdAndUpdate(id, req.body, {new: true})
        if (!reserva) {
            return res.json({
                erro: true,
                mensagem: 'Reserva não encontrada :('
            })
        }
        res.json({
            erro: false,
            reserva
        })
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
    }
}

const deleteReserva = async (req, res) => {
    try {
        const {id} = req.params
        const reserva = await reservasModel.findByIdAndDelete(id)
        if (!reserva) {
            return res.json({
                erro: true,
                mensagem: 'Reserva não encontrada :('
            })
        }
        res.json({
            erro: false,
            mensagem: 'Reserva excluida com sucesso!'
        })
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
    }
}

export {addReserva, buscarReservas, buscarReservaPorId, atualizarReserva, deleteReserva}