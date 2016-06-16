/**
 * Ejemplo avanzado de conexión a MongoDB
 *
 * En este script se muestra como es el proceso para conectarse a una base
 * de datos NOSQL (MongoDB), hacer una inserción de un JSON con vários 
 * parámetros y filtrar la búsqueda por ellos.
 * 
 */
var mongodb = require('mongodb'); /** Traemos el interfaz de conexión con mongodb */

var uri = "mongodb://localhost:27017/example"; /** Set example db on localhost:27017 */

/** Nos conectamos a la base de datos*/
mongodb.MongoClient.connect(uri, function (error, db) {
	if (error) {
		console.log(error);
		process.exit(1);
	}

	/** Tenemos conexión :) */
	var doc = {
		title 		: "Jawks",
		year 		: 1975,
		director 	: 'Steven Spielberg',
		rating		: 'PG',
		attemp		: Math.floor((Math.random() * 100) + 1),
		ratings		: {
			critics		: 80,
			audience 	: 97
		},
		screenplay 	: ['Peter', 'John']
	};

	/** db es el puntero a nuestra base de datos. Insertamos*/
	db.collection('movies').insert(doc, function(error, result){
		if (error) {
			console.log(error);
			process.exit(2);
		}

		/**
		 * Podemos hacer querys más finas
		 */
		//var query = { year: 1975, attemp: 14 };
		//var query = { year: 1975, screenplay: 'Peter' };
		var query = { 'ratings.audience': { '$gte' :90 } }
		db.collection('movies').find(query).toArray(function(error, docs) {
			if (error) {
				console.log(error);
				process.exit(3);
			}

			console.log('Found docs!!!');
			docs.forEach(function(doc) {
				console.log(JSON.stringify(doc));
			});
			process.exit(0);
		});
	});
});