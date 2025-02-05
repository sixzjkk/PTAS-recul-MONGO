import {Schema, model} from 'mongoose';

const reservasSchema = new Schema({
    nome: {
        type: String,
        required: true
    }, 
    data: {
        type: Date,
        required: true
    },
    evento: {
        type: String,
        required: true
    }
})

const reservasModel = model('Reservas', reservasSchema)
export {reservasModel}