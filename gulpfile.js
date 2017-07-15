const gulp = require('gulp');
//const spawn = require('child_process').spawn;
const exec = require('child_process').exec;
const bs = require('browser-sync').create();
const sass = require('gulp-sass');

const path = {
    html: ['*.html', '_includes/*.html', '_layouts/*.html'],
    scss: 'scss/**/*.scss',
    js: 'assets/js/*.js'
}

// 1. Выполнить команду jekyll build
/*
gulp.task('jekyll:build', function(done) {
   return spawn('jekyll',['build'], {
       shell: true,
        stdio: 'inherit'
    }).on('close', done);
});

*/
gulp.task('jekyll:build', ['sass'], function(done) {
    exec('jekyll build', function(error, stdout, stderr){

        if (error) {
            console.log(`exec error ${error}`);
            return;
        }
        console.log(`exec stdout ${stdout}`);
         console.log(`exec stderr ${stderr}`);
        done();

    })
});
// запуск локального сервера из папки _site
gulp.task('browser-sync', ['jekyll:build'], function(){
    bs.init({
        server: {
            baseDir: "_site"
        }
    });
});

gulp.task('sass', function(){
    return gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('_site/assets/styles/'))
        .pipe(bs.stream())
        .pipe(gulp.dest('assets/styles/'))
});

// следить за изменениями исходных файлов и перезапускать сервер и сборку нашего сайта

gulp.task('jekyll:rebuild', ['jekyll:build'], function(){
    bs.reload();
});

gulp.task('watch', function() {
    gulp.watch( path.html, ['jekyll:rebuild']);
    gulp.watch( path.scss, ['sass']);
    gulp.watch( path.js, ['jekyll:rebuild']);
});

gulp.task('serve', ['browser-sync', 'watch']);
