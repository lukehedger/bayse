# Bayse - a project starter template

## Stack

- CoffeeScript - A language that compiles to JavaScript
- Myth - A CSS preprocessor [http://www.myth.io/](http://www.myth.io/)
- Requirejs - A JavaScript file and module loader

## Structure

* CSS
	- responsive grid and base styles
	- Myth is optional: write CSS in myth.css then run `$ myth css/myth.css css/main.css -w` to compile and watch

* JS
	- compiled Coffee
	- lib
		- require
		- jquery
		- hammer
		- add other vendor files here

* CoffeScript
	- source Coffee - compile with: `$ coffee -o js/ -cwm coffee/`