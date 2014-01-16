module.exports = (grunt) ->
	
	# Load tasks
	Object.keys(require("./package.json").dependencies).forEach (dep) -> grunt.loadNpmTasks dep if dep.substring(0,6) is "grunt-"

	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'

		# Compile CoffeeScript one with seperate js and one combined
		coffee:
			src:
				options:
					bare: true
					sourceMap: true
				expand: true
				cwd: "coffee"
				src: ["**/*.coffee"]
				dest: "js/"
				ext: ".js"
			

		# watch for changes
		watch:
			scripts:
				files: ['coffee/**/*.coffee']
				tasks: ['coffee']
				options:
					interrupt: true


	# Default task(s).
	grunt.registerTask 'default', ['coffee','watch']