module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    debugInfo: true,
                    lineNumbers: true
                },
                files: {
                    '_ui/css/main.css': '_ui/css/main.scss'
                }
            },
            dist: {
                options: {
                    debugInfo: false
                },
                files: {
                    '_ui/compiled/main.min.css': '_ui/css/main.scss'
                }
            }
        },

        cssmin: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
                },
                files: {
                    '_ui/compiled/main.min.css': ['_ui/compiled/main.min.css']
                }
            }
        },

        watch: {
            sass: {
                files: ['_ui/css/sass/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        }
    });

    // NPM tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-shell');

    // Grunt tasks
    grunt.registerTask('default', ['sass', 'cssmin']);

};
