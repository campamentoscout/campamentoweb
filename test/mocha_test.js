/**
 * Launchin mocha:
 * 1.- Run all test in a file:
 * 		./node_modules/.bin/mocha $PATH_TO_TEST
 * 2.- Run test with a certain regular expressión:
 * 		./node_modules/.bin/mocha -g "fails" $PATH_TO_TEST 
 * 3.- Having diferent reports
 * 		3.1.- dot reporter
 * 	 		./node_modules/.bin/mocha -R dot $PATH_TO_TEST
 * 	  	3.1.- nyan reporter	(nice ascii cat if all done)
 * 		  	./node_modules/.bin/mocha -R nyan $PATH_TO_TEST
 * 4.- npm scripts: See package.json
 * 		4.1.- General test script:
 * 			npm test
 * 		4.2.- Custom test scripts:
 * 			npm run test-kitten
 */

var assert = require('assert');


/**
 * Mocha is designed for BDD, that here are two scenarios
 */
describe('my feature', function () {
	it('works', function () {
		assert.equal('A', 'A');
	});

	it('fails gracefully', function () {
		assert.throws(function () {
			throw 'ERROR!!';
		});
	});
});

describe('my other feature', function () {
	it('async', function (done) {
		setTimeout(function () {
			done();
		}, 25);
	});
});