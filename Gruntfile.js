/*
 * grunt-cssflow
 * https://github.com/allanhortle/grunt-cssflow-git
 *
 * Copyright (c) 2014 Allan Hortle
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerTask('test', ['clean', 'cssflow', 'nodeunit']);
    grunt.registerTask('default', ['cssflow']);

    grunt.initConfig({
        clean: {
            tests: ['tmp']
        },
        cssflow: {
            sass: {
                options :{
                    autoprefixer: {
                        browsers: ['last 2 version', 'ie 8', 'ie 9']
                    }
                },
                files: {
                    'tmp/main.css': ['test/main.scss'],
                }
            },
            less: {
                options: {
                    preprocessor: 'less'
                },
                files: {
                    'tmp/mainLess.css': ['test/mainLess.less'],
                }
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

};
