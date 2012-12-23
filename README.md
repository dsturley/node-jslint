# node-jslint

CommonJS bindings for JSLint.

## Usage

It shoud work out of the box from npm.  `var jslint = require('node-jslint').JSLINT`


## Updating JSLint

	cd support/JSLint
	git pull origin master
	cd ../../
	node make.js test
