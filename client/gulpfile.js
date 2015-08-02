var gulp = require('gulp');
var injector = require('gulp-inject');
var concatinator = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');

var target_folder = './release/';
var vendor_js = [
    './node_modules/angular/angular.js',
    './node_modules/angular-ui-router/build/angular-ui-router.min.js'
];
var source_js = [
    './source/**/*.js'
];
var templates = [
  './source/index.html',
    './source/**/*.html'
];

var order = [
    'scripts/vendor.js',
    'templates/templates.js',
    'scripts/app.js'
];
gulp.task('clean', function () {
    return gulp.src(target_folder, {read: false})
        .pipe(clean());
});

gulp.task('vendor_scripts', function(){
    return gulp.src(vendor_js)
        .pipe(concatinator('vendor.js'))
        .pipe(gulp.dest(target_folder + '/scripts'));
});
gulp.task('source_scripts', function(){
    return gulp.src(source_js)
        .pipe(concatinator('app.js'))
        .pipe(gulp.dest(target_folder + '/scripts'));
});
gulp.task('templates', function(){
    return gulp.src(templates)
        .pipe(templateCache({standalone: true}))
        .pipe(gulp.dest(target_folder + '/templates'));

});

gulp.task('build', ['templates', 'scripts', 'index']);
gulp.task('scripts', ['vendor_scripts', 'source_scripts']);


gulp.task('run', ['build', 'watch'], function() {
    gulp.src(target_folder)
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});
gulp.task('watch', function(){
    gulp.watch(source_js, ['source_scripts']);
    gulp.watch(templates, ['templates', 'index']);
});
gulp.task('index',['templates', 'scripts'], function () {
    var target = gulp.src('./source/index.html');

    var sources = gulp.src(order, {read: false, cwd: target_folder});

    return target.pipe(injector(sources))
        .pipe(gulp.dest(target_folder));
});