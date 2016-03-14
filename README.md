# grunt-cssflow

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Dependency Status](https://david-dm.org/allanhortle/grunt-cssflow.svg)](https://david-dm.org/allanhortle/grunt-cssflow)
[![devDependency Status](https://david-dm.org/allanhortle/grunt-cssflow/dev-status.svg)](https://david-dm.org/allanhortle/grunt-cssflow#info=devDependencies)

> Combination pre-process, auto-prefix, minify.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssflow --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssflow');
```

## The "cssflow" task

### Overview
In your project's Gruntfile, add a section named `cssflow` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssflow: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.preprocessor
Type: `String`
Default value: `sass`

A string value that is used to do determine the preprocessor

#### options.sass
Type: `Object`

Pass in any custom Sass configurations

#### options.less
Type: `Object`

Pass in any custom Less configurations

#### options.autoprefixer
Type: `Object`

Pass in any custom Autoprefixer configurations

#### options.cssmin
Type: `Object`

Pass in any custom cssmin configurations


### Usage Examples

#### Default Configuration
```js
grunt.initConfig({
  cssflow: {
    your_target: {
      files: {
        'css/main.css': 'sass/main.scss'
      }
    }
  }
});
```

#### Less Configuration
```js
grunt.initConfig({
  cssflow: {
    options: {
      preprocessor: 'less',
      autoprefixer: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      }
    },
    your_target: {
      files: {
        'css/main.css': 'less/main.less'
      }
    }
  }
});
```
