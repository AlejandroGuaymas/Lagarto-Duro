const homePage = require('./homePage');
const enCartelera = require('./enCartelera');
const masVotadas = require('./masVotadas');
const sucursales = require('./sucursales');
const contacto = require('./contacto');
const preguntasFrecuentes = require('./preguntasFrecuentes');

let index = {
	homePage:function(res){
			res.write(homePage.titulo + '\n')
			res.write(" Total: " + homePage.cantidad() + '\n\n')
	
		let pelis = homePage.listarPelis();
			for(peli of pelis){
				res.write(peli)
				res.write('\n')
			}
			
			res.end()
	},
	enCartelera:function(res){
		res.write(enCartelera.titulo + '\n')
			res.write(" Total: " + enCartelera.cantidad() + '\n\n')
	
		let peliculas = enCartelera.listarPelis();
			for(pelicula of peliculas){
				res.write(pelicula.title + '\n')
				res.write(pelicula.overview)
				res.write('\n\n')
			}
			
			res.end()
	},
	
	masVotadas:function(res){
			res.write(masVotadas.titulo);
			res.write('\n\n')
			res.write('Total de peliculas en cartelera: ' + masVotadas.cantidad())
			res.write('\n\n')
			res.write(('Listado de peliculas de mayor Rating').toUpperCase())
			res.write('\n\n')
			let movies = masVotadas.listarPelis();
			movies.forEach(function(movie){
				res.write('\n')
				res.write(movie.title + "\nRating: " + movie.vote_average + '\n')
				res.write(movie.overview + '\n')
			})
		res.end()
	},

	sucursales:function(res){
		res.write(sucursales.titulo + '\n\n')
		res.write(" Total de salas: " + sucursales.cantidad() + '\n\n')
		let listadoDeSucursales = sucursales.listadoDeSalas();
			for(sala of listadoDeSucursales){
			res.write(sala.name + '\n')
			res.write(sala.address + '\n')
			res.write(sala.description)
			res.write('\n\n')
		}
		res.end()
	},
	contacto:function(res){
		res.write(contacto.titulo + '\n\n')
		res.write(contacto.contenido + '\n')

		res.end()
	},
	preguntasFrecuentes:function(res){
		res.write(preguntasFrecuentes.titulo + '\n')
		res.write(" Total de preguntas: " + preguntasFrecuentes.cantidad() + '\n\n')
		let todasLasPreguntas= preguntasFrecuentes.listadoDePreguntas();
			for(pregunta of todasLasPreguntas){
				res.write(pregunta.faq_title + '\n')
				res.write(pregunta.faq_answer)
				res.write('\n\n')
	}
	res.end()
},

}

module.exports = index