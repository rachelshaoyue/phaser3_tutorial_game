module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: '.'
                }
            }
        },
        concat: {
            dist: {
                src: [ 
                    //  "lib/**/*.js",
                    // "js/**/*.js",
                    "phaser3-tutorial-src/assets/*.png",
                    "phaser3-tutorial-src/*.html"
                     ],
                dest: 'deploy/js/<%= pkg.name %>.js'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            files: [
                // 'js/**/*.js'
                // "phaser3-tutorial-src/assets/*",
                "phaser3-tutorial-src/*",
                ],
            tasks: []
        },
        open: {
            dev: {
                path: 'http://localhost:8080/phaser3-tutorial-src/index.html'
            }
        }
    });

    grunt.registerTask('default', ['connect', 'open', 'watch']);
}
