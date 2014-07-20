/*
 * grunt-cssflow
 * https://github.com/allanhortle/grunt-cssflow-git
 *
 * Copyright (c) 2014 Allan Hortle
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    var options;

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerMultiTask('cssflow', 'Combination pre-process, auto-prefix, minify.', function() {
        // Merge task-specific and/or target-specific options with these defaults.

        var dests = {};
        var mins = {};

        options = this.options({
            preprocessor: 'sass',
            sass: {},
            less: {},
            autoprefixer: {},
            cssmin: {}
        });



        this.files.forEach(function(f) {
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            });
            var suffix = f.dest.split('.').pop();
            dests[f.dest] = f.dest;
            mins[f.dest.replace(suffix,'min.' + suffix)] = f.dest;
                     
        });

        grunt.config(options.preprocessor, {
            options: options[options.preprocessor],            
            inator: {
                files: this.data.files
            }
        });

        grunt.config('autoprefixer', {
            options: options.autoprefixer,
            ing: {
                files: dests
            }
        });

        grunt.config('cssmin', {
            options: options.cssmin,
            ify: {
                files: mins
            }
        });

        var prefix = options.autoprefixer.browsers || 'default';

        grunt.log.subhead('=============================================='['rainbow']);
        grunt.log.writeln('                C S S  F L O W                ');
        grunt.log.writeln('=============================================='['rainbow']);
        grunt.log.ok('Pre-processor: ' + options.preprocessor);
        grunt.log.ok('Prefixing:     ' + prefix);
        grunt.log.ok('Minfiy:        Always');
        grunt.log.writeln('=============================================='['rainbow']);

        grunt.task.run([options.preprocessor, 'autoprefixer', 'cssmin']);

    });

};
