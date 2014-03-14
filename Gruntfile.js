module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		meta: {
			bowerrc: grunt.file.readJSON(".bowerrc"),
			banner: [
				"/* <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today('yyyy-mm-dd') %>",
				" * <%= pkg.homepage %>",
				" * License: <%= pkg.license %>",
				" */\n"
			].join("\n"),
			lib: "<%= meta.bowerrc.directory %>",
			dist: "."
		},
		clean: {
			dist: [
				".tmp",
				"<%= meta.dist %>/*.min.js",
				"<%= meta.dist %>/*.map"
			]
		},
		sync: {
			options: {
				include: ["name", "version", "description", "authors", "license", "homepage", "main"]
			}
		},
		concat: {
			dist: {
				options: {
					banner: "<%= meta.banner %>(function(){\n",
					footer: "\n}).call(this);"
				},
				src: [
					"src/*.js"
				],
				dest: "<%= meta.dist %>/<%= pkg.name %>.js"
			}
		},
		uglify: {
			all: {
				options: {
					sourceMap: true,
					banner: "<%= meta.banner %>"
				},
				files: {
					"<%= meta.dist %>/<%= pkg.name %>.min.js": [
						"<%= meta.dist %>/<%= pkg.name %>.js"
					]
				}
			}
		}
	});

	require("load-grunt-tasks")(grunt);
	grunt.registerTask("build", ["concat", "uglify"]);
	grunt.registerTask("default", ["clean", "sync", "build"]);

};
