define [
	"jquery"
	"jquery.hammer.min"
], ($,Hammer) ->

	class App

		_hammer : null

		constructor: ->

			@_hammer = $('body').hammer();

			@_addListeners()

			console.log 'Running...'

		_addListeners: ->

			$(document).on 'click','.example', @_function
			$('.example').on 'click', @_function

		_function: ->

			console.log 'hello : )'