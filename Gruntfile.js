/*jshint node:true */
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        complexity: {
            options: {
                errorsOnly: false,
                cyclomatic: 20,
                halstead: 30,
                maintainability: 85
            },
            generic: {
                src: [
                    'mousetrap.js'
                ]
            },
            plugins: {
                src: [
                    'plugins/**/*.js',
                    '!plugins/**/tests/**',
                    '!plugins/**/*.min.js'
                ]
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'mousetrap.min.js': ['mousetrap.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-complexity');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', [
        'complexity', 'uglify'
    ]);
};
