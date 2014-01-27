# Bayse - a project starter template

## Stack

- CoffeeScript - A language that compiles to JavaScript
- Myth - A CSS preprocessor [http://www.myth.io/](http://www.myth.io/)
- Requirejs - A JavaScript file and module loader
- Gruntjs - A JavaScript task runner

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

## Setup

If you choose to use grunt to compile the CoffeeScript and Myth files then run the following commands to get started:

### Install Grunt

```
sudo npm install -g grunt-cli
```

### Install Grunt Dependencies

```
sudo npm install --save-dev
```

### Compile and watch

```
grunt
```

### Stop watching

To stop the watch task running ctrl + z.