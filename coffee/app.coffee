define [
	"jquery"
	"jquery.hammer.min"
	"child"
], ($,Hammer,Child) ->

	class App

		_hammer : null

		constructor: ->

			# @_hammer = $('body').hammer();

			@_addListeners()

			console.log 'Running...'

			kid = new Child()

		_addListeners: ->

			$(document).on 'click','.example', @_function
			$('.example').on 'click', @_function

		_function: ->

			console.log 'hello : )'

		

		_onModalOpen: ->

			$('body').addClass('modal-open').append '<div class="overlay"></div>'

		_onModalClose: =>

			$('.overlay').fadeOut 200, -> $(this).remove()
			$('body').removeClass 'modal-open'