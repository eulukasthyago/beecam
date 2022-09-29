const gulp = require('gulp');
const ts = require('gulp-typescript');
const sass = require('gulp-sass')(require('node-sass'));
const conct = require('gulp-concat');
const tsProject = ts.createProject("tsconfig.json");
const merge = require('merge-stream');

function compsass(){
  return gulp.src('./css/sass/**/*.scss')
  .pipe(conct('styles.scss'))
  .pipe(gulp.dest('./css'))
  .pipe(sass({ outputStyle: 'compressed' }))
  .pipe(gulp.dest('./css'));
}
function typescript(){
  return gulp.src(['./main.ts', 'node_modules/@types/*.d.ts', 'node_modules/nwjs-types/*.d.ts'])
  .pipe(tsProject()).js
  .pipe(gulp.dest('./'));

  //  merge([
  //   tsResult.dts.pipe(gulp.dest('./js/types')),
  //   tsResult.js.pipe(gulp.dest('./'))
  // ]);
  // return gulp.src('./js/ts/**/*.ts')
  // .pipe(conct('main.ts'))
  // .pipe(gulp.dest('./js'))
  // .pipe(tsProject.src())
  // .pipe(gulp.dest('./'));
}

function watch(){
  gulp.watch('./css/sass/**/*.scss', compsass);
  gulp.watch('./main.ts', typescript);
}

exports.compsass = compsass;
exports.watch = watch;