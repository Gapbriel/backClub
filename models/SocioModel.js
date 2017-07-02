var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tiposSocioArray = ['vitalicio', 'mayor', 'menor'];

var Socio = new Schema ({ 
	nroSocio: {
        type: Number,
        required: true
    },
    nombre: String,
    dni: String,
    direccion: {
        calle: String,
        numero: String,
        ciudad: String,
        codigoPostal: Number
    },
    tipoSocio: { type: String, enum: tiposSocioArray}
});

module.exports = mongoose.model('Socio', SocioSchema);