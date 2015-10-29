# Bayse

Bayse is a straight-forward, ever-evolving, hyphen-loving project starter kit.

## Stack

To read more about the tech stack of this project take a look at [wiki/stack](wiki/stack.md).

## Architecture

To read more about the architecture of this project take a look at [wiki/architecture](wiki/architecture.md).

## Installation

### Volo

You can create a new Bayse project with VoloJS [http://volojs.org/](http://volojs.org/)

```
npm install -g volo
volo create <app-name> lukehedger/bayse
```

### Slush

For a custom Bayse, use the Slush generator [http://slushjs.github.io/](http://slushjs.github.io/)

```
npm install -g slush slush-bayse
mkdir bayse-project && cd $_
slush bayse <app-name>
```

## Getting started

- Install global dependencies:

```
npm install -g babel webpack
```

- Install local dependencies:

```
npm install
```

## Local server

- Run app

```
npm start
```

## Release

- Build release files

```
npm run build
```
