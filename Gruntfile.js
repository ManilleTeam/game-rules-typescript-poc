module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha-cli');

    grunt.initConfig({
        copy: {
            typescriptDev: {
                files: [{
                    expand: true,
                    src: ['**/*.js'],
                    dest: 'dist/',
                    cwd: 'src/'
                }]
            }
        },
        clean: {
            typescriptDev: [
                "src/**/*.js"
            ],
            build: [
                'dist'
            ]
        },
        typescript: {
            dev: {
                src: ['src/**/*.ts'],
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    noImplicitAny: true,
                    basePath: 'src/'
                }
            }
        },
        watch: {
            typescriptDev: {
                files: ['src/**/*.ts'],
                tasks: ['build']
            }
        },
        mochacli: {
            all: ['test/**/*.js']
        }
    });

    grunt.registerTask('default', 'build');
    grunt.registerTask('build', [
        'clean:build',
        'typescript:dev',
        'copy:typescriptDev',
        'clean:typescriptDev']);
    grunt.registerTask('test', ['build', 'mochacli']);
};
