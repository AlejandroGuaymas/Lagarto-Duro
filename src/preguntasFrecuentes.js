const fs = require('fs')

let preguntasFrecuentes = {

db: './data/faqs.json',
titulo: "Preguntas Frecuentes",
leerJSON: function(){
	let faqsJSON = fs.readFileSync(this.db, 'utf-8');
	let faqs = JSON.parse(faqsJSON);
	return faqs 
},

cantidad: function(){
	return this.leerJSON().total_faqs
},

listadoDePreguntas: function(){
	let faqs = this.leerJSON();
	let preguntas = faqs.faqs
	return preguntas

},
}
module.exports= preguntasFrecuentes