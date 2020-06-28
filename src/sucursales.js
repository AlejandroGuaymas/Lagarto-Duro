const fs = require('fs')

let sucursales = {
	db: './data/theaters.json',
	titulo: "Nuestras Salas",
leerJSON: function(){
	let theatersJSON = fs.readFileSync(this.db, 'utf-8');
	let theaters = JSON.parse(theatersJSON);
	return theaters 
},

cantidad: function(){
	return this.leerJSON().total_theaters
},

listadoDeSalas: function(){
	let theaters = this.leerJSON();
	let salas = theaters.theaters
	return salas
},

}
module.exports= sucursales