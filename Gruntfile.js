module.exports = function(grunt) {

 grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {
      },
      files: {
        src: ['test/**/*']
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'server.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
     express: {
        files:  [ '<%= jshint.files %>' ],
        tasks:  [ 'express:dev', 'mocha_casperjs' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    },
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'server.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('server', ['express:dev', 'watch']);
  grunt.registerTask('default', ['express:dev', 'mocha_casperjs', 'jshint']);

};