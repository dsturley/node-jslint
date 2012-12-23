
var fs = require('fs'),
	args = process.argv.slice(2);

(function build() {
	fs.readFile('support/binding.js', 'utf8', function (err, binding) {
		if (err) throw err;

		fs.readFile('support/JSLint/jslint.js', 'utf8', function (err, jslint) {
			if (err) throw err;

			fs.writeFile('lib/index.js', jslint + '\n' + binding, 'utf8', function (err) {
				if (err) throw err;

				console.log('File created');
			});
		});
	});
}());

function test() {
	var jslint = require('./lib/index.js').JSLINT;
	if (typeof jslint !== 'function') {
		throw new Error("It didn't work :(");
	} else {
		console.log('it works!');
	}
}

if (args.indexOf('test') !== -1) {
	test();
}