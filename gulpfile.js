var gulp = require('gulp');
var gutil = require('gulp-util');
var handlebars = require('gulp-ember-handlebars');

gulp.task('default', function(){
  // place code for your default task here
});

gulp.task('templates', function(){
    gulp.src(['/ddjs/templates/*.hbs'])
        .pipe(handlebars({
            outputType: 'amd'
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('build/js/'));
});

