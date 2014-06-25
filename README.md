# Bayse - a project starter template

## Stack

- **CoffeeScript** - language that compiles to JavaScript [http://coffeescript.org/](http://coffeescript.org/)
- **Myth** - CSS preprocessor [http://www.myth.io/](http://www.myth.io/)
- **RactiveJS** - template-driven UI library [http://www.ractivejs.org/](http://www.ractivejs.org/)
- **RequireJS** - JavaScript file and module loader [http://requirejs.org/](http://requirejs.org/)
- **GulpJS** - JavaScript task runner [http://gulpjs.com/](http://gulpjs.com/)

## Structure

- **CoffeScript**
    - source CoffeeScript: edit `.coffee` files in `coffee/` and run `gulp watch` to compile and watch

- **JS**
    - compiled CoffeeScript

- **Myth**
    - source CSS: edit `.css` files in `myth/` and run `gulp watch` to compile and watch
    - includes responsive grid and other helpers in `myth/lib/`

- **CSS**
	- compiled Myth CSS

- **Vendor**
    - RequireJS
    - jQuery
    - add other vendor files here

## Installation

### Volo

You can create a new Bayse project with VoloJS [http://volojs.org/](http://volojs.org/)

```
npm install -g volo
volo create bayse-project lukehedger/bayse
```

### Slush - *coming soon*

For a custom Bayse, use the Slush generator [http://slushjs.github.io/](http://slushjs.github.io/)

```
npm install -g slush
npm install -g slush-bayse
mkdir bayse-project
cd bayse-project
slush bayse
```

### Yeoman

There's also a Yeoman generator [http://yeoman.io/](http://yeoman.io/)

```
npm install -g yo
npm install -g generator-bayse
mkdir bayse-project
cd bayse-project
yo bayse
```

## Getting started

If you choose to use Gulp to compile the CoffeeScript and Myth files then run the following commands in the root of your project to get started:

### Install Gulp

`npm install -g gulp`

### Install Gulp Dependencies

`npm install --save-dev`

### Compile and watch

`gulp watch`

### ...or just compile once

`gulp`

### Stop watching

`ctrl + c`

## TODO

- [x] Yeoman generator
- [ ] Slush generator
- [ ] Ractive templating
- [ ] editorconfig file
- [ ] improve HTML boilerplate with [http://html5boilerplate.com/](http://html5boilerplate.com/)
- [ ] browserify ([here](http://viget.com/extend/gulp-browserify-starter-faq) and [here](http://browserify.org/))
- [ ] moutjs ([here](http://moutjs.com/) - use with browserify)