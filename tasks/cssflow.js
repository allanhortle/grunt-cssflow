/*
 * grunt-cssflow
 * https://github.com/allanhortle/grunt-cssflow-git
 *
 * Copyright (c) 2014 Allan Hortle
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var options;
    var cwd = process.cwd();

    // Loading cssflow's dir on account of grunt failing at submodule loading
    process.chdir('node_modules/grunt-cssflow/');

    // Load the tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Back to current dir
    process.chdir(cwd);


    grunt.registerMultiTask('cssflow', 'Combination pre-process, auto-prefix, minify.', function() {

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
            var suffix = f.dest.split('.').pop();
            // add destination override
            dests[f.dest] = f.dest;
            mins[f.dest.replace(new RegExp(suffix + '$'),'min.' + suffix)] = f.dest;
        });

        // Preprocess
        grunt.config(options.preprocessor, {
            options: options[options.preprocessor],            
            inator: {
                files: this.data.files
            }
        });

        // Autoprefix
        grunt.config('autoprefixer', {
            options: options.autoprefixer,
            ing: {
                files: dests
            }
        });

        // Minify
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
        grunt.log.ok('Minifiy:       Always');
        grunt.log.writeln('=============================================='['rainbow']);

        grunt.task.run([options.preprocessor, 'autoprefixer', 'cssmin']);

    });

};
