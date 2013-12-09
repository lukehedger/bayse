require.config
	paths:
		"jquery": "lib/jquery"
		"jquery.hammer.min": "lib/jquery.hammer.min"
		# "custom": "custom"

	shim:
		app: ["jquery"]
		# custom: 
		# 	exports: "custom"


require ["app"], (App) -> new App()