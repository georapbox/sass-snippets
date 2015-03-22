module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dev: {
                options: {
                    sourcemap: true,
                    trace: true,
                    sassDir: 'examples/sass',
                    cssDir: 'examples/css'
                }
            }
        },

        watch: {
            css: {
                files: ['*.css'],
            }
        },
    });

    /* ------------- Load Grunt Plugins ------------- */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    /* --------------- Register Tasks --------------- */
    grunt.registerTask('watch:dev', function () {
        var config = {
            sass: {
                files: ['examples/sass/*.scss'],
                tasks: ['compass:dev']
            }
        };

        grunt.config('watch', config);
        grunt.task.run('watch');
    });

    grunt.registerTask('compile', function () {
        grunt.task.run('compass:dev');
    });
};