module.exports = (grunt) ->
	
	# Load tasks
	Object.keys(require("./package.json").dependencies).forEach (dep) -> grunt.loadNpmTasks dep if dep.substring(0,6) is "grunt-"

	grunt.initConfig

		# Compile CoffeeScript one with seperate js and one combined
		coffee:
			compile:
				options:
					bare: true
					sourceMap: true
				expand: true
				cwd: "coffee/"
				src: ["**/*.coffee"]
				dest: "js/"
				ext: ".js"

		# myth:
		# 	dist:
		# 		files:
		# 			"main.css": "myth.css" # 'destination': 'source'

		# watch for changes
		watch:
			coffee:
				files: ["coffee/**/*.coffee"]
				options:
					interrupt: true
					spawn: false
			# myth:
			# 	files: ["css/**/*.myth"]
			# 	options:
			# 		spawn: false
			# 	tasks: ["myth"]

	grunt.event.on "watch", (action, filepath) ->
		# Return if it's not a Coffee file
		return if filepath.indexOf(".coffee") < 0

		# Get the path of the coffee files
		source_coffee = "coffee/"
		source_js = "js/"
		file_name = filepath.split("#{source_coffee}/").join("")
		notification = null
		tasks = []

		grunt.option "force", true

		if action is "deleted"
			# Change the coffee path to the js path
			# And also change the "coffee" extension to "js"
			filepath = filepath.split(source_coffee).join(source_js)
			filepath = filepath.split(".coffee").join(".js")

			# Delete a specific file
			grunt.task.run tasks
		else
			# Remove the path from the file that was changed
			filepath = filepath.split(source_coffee).join("")
			filepath = filepath.slice(1, filepath.length) if filepath.indexOf("/") is 0
			tasks = ["coffee"]

			grunt.config ["coffee", "compile", "src"], filepath

			# Run the the CoffeeScript and check for errors
			grunt.task.run tasks

	# Default task(s).
	grunt.registerTask "default", ["coffee","watch"]
	# grunt.registerTask "default", ["coffee","myth","watch"]
