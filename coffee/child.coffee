define [
	"jquery"
	"App"
], ($,App) ->

	class Child extends App

		constructor: ->

			# run a function belonging to the parent Class
			@_function()