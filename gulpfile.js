const { series, parallel, ...gulp } = require('gulp');
const ts = require('gulp-typescript');
const sass = require('gulp-sass')(require('node-sass'));
const conct = require('gulp-concat');
const tsProject = ts.createProject("tsconfig.json");
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

function compSass(){
  return gulp.src('./css/sass/**/*.scss')
  .pipe(conct('style.scss'))
  .pipe(gulp.dest('./css'))
  .pipe(sass({ 
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(gulp.dest('./views'))
  .pipe(browserSync.stream());;
}
exports.compSass = compSass;

function compComponents(){
  return gulp.src('./components/**/*.ts')
  .pipe(conct('components.ts'))
  .pipe(gulp.dest('./components/'))
  .pipe(ts({
    "target": "es6",
    "module": "umd",
    "outDir": "lib",
    "noImplicitAny": true,
    "moduleResolution": "node"
  }))
  .pipe(gulp.dest('./js'));
}

function compTypescript(){
  return gulp.src([
    './main.ts',
    'node_modules/@types/*.d.ts',
    'node_modules/nwjs-types/*.d.ts',
    '!node_modules/**/node_modules/**/*.d.ts'
  ])
  .pipe(ts({
    "target": "es6",
    "module": "umd",
    "outDir": "lib",
    "noImplicitAny": true,
    "moduleResolution": "node",
  })).js
  .pipe(gulp.dest('./'));
  // .pipe(browserSync.stream());
}
exports.compTypescript = compTypescript;

function browser() {
  browserSync.init({
    open: false,
    server: {
      baseDir: './views/'
    }
  });
}
exports.browser = browser;

function watch(){
  gulp.watch('./css/sass/**/*.scss', compSass);
  gulp.watch('./main.ts', compTypescript);
  gulp.watch(['./components/**/*.ts', '!./components/components.ts'], compComponents);
  gulp.watch('./views/**/*.html').on('change', function(){
    browserSync.reload()
  });
}
exports.watch = watch;

exports.default = parallel(compSass, compTypescript, compComponents, watch, browser);