/**
 * Ejemplo básico de conexión a MongoDB
 *
 * En este script se muestra como es el proceso para conectarse a una base
 * de datos NOSQL (MongoDB), hacer una inserción sencilla y luego recuperarla.
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

	/** db es el puntero a nuestra base de datos. Insertamos*/
	db.collection('sample').insert({x : Math.floor((Math.random() * 100) + 1)}, function(error, result){
		if (error) {
			console.log(error);
			process.exit(2);
		}

		/** Dentro de esta callback seguimos teniendo a db, por lo que podemos 
		  *	buscar.
		  *	find() devuelve un puntero a un objeto de mongodb sobre el que 
		  *	iterar de manera "fina".
		  *	toArray nos lo mete todo en un array.
		  */
		db.collection('sample').find().toArray(function(error, docs) {
			if (error) {
				console.log(error);
				process.exit(3);
			}

			console.log('Found docs!!!');
			docs.forEach(function(doc) {
				console.log(JSON.stringify(doc));
			});
			process.exit(0);
		})
	})
});