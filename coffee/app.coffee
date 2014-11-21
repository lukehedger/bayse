ractive = require 'ractive'

class App

	constructor: ->

		console.log 'Bayse up and running...'

		@_setupView()

	_setupView: ->

		# templates
		@$template = new Ractive
			el: ".template"
			template: require "../template/template.html"
			data:
				template: true


new App()