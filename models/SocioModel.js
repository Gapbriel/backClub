var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tiposSocioArray = ['Activo', 'Cadete', 'Futuro'];

var Socio = new Schema ({ 
	nroSocio: {
        type: Number,
        required: true
    },
    nombre: String,
    dni: String,
    telefono: Number,
    fechaNacimiento: Date,
    email: String,
    direccion: {
        calle: String,
        numero: String,
        ciudad: String,
        codigoPostal: Number
    },
    tipoSocio: { type: String, enum: tiposSocioArray},
    observaciones: String
});

module.exports = mongoose.model('Socio', SocioSchema);
