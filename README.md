# Bayse

Bayse is a straight-forward, ever-evolving, hyphen-loving project starter template. In its most basic form it is an HTML boilerplate with a CSS grid system and RequireJS. You've then got the option to add CoffeeScript and/or Myth - with Gulp as the build system. It also has a built-in, synchronised server with BrowserSync. Templating with Ractive is coming soon too.

## Stack

- **CoffeeScript** - language that compiles to JavaScript [http://coffeescript.org/](http://coffeescript.org/)
- **Myth** - CSS preprocessor [http://www.myth.io/](http://www.myth.io/)
- **RactiveJS** - template-driven UI library [http://www.ractivejs.org/](http://www.ractivejs.org/)
- **RequireJS** - JavaScript file and module loader [http://requirejs.org/](http://requirejs.org/)
- **GulpJS** - JavaScript task runner [http://gulpjs.com/](http://gulpjs.com/)
- **BrowserSync** - Synchronised browser testing with built-in server [http://www.browsersync.io/](http://www.browsersync.io/)

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

### Slush

For a custom Bayse, use the Slush generator [http://slushjs.github.io/](http://slushjs.github.io/)

```
npm install -g slush
npm install -g slush-bayse
mkdir bayse-project && cd $_
slush bayse <app-name>
```

### Yeoman

There's also a Yeoman generator [http://yeoman.io/](http://yeoman.io/)

```
npm install -g yo
npm install -g generator-bayse
mkdir bayse-project && cd $_
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

## Server

When using Gulp, the `gulp watch` task will start a BrowserSync server at port 5000 [http://localhost:5000](http://localhost:5000). You can configure BrowserSync options within `gulpfile.js`.

## TODO

- [x] Yeoman generator
- [x] Slush generator
- [x] Gulp server w/BrowserSync
- [ ] editorconfig file
- [ ] improve HTML boilerplate with [http://html5boilerplate.com/](http://html5boilerplate.com/)
- [ ] Ractive templating
- [ ] browserify ([here](http://viget.com/extend/gulp-browserify-starter-faq) and [here](http://browserify.org/))
- [ ] moutjs ([here](http://moutjs.com/) - use with browserify)
- [ ] Build task