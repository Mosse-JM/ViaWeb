
const {src, dest, watch, series , parallel} = require('gulp');
const cssnano = require ('cssnano');
const autoprefixer = require ('autoprefixer');
const imagemin = require ('gulp-imagemin');
const sourcemaps = require ('gulp-sourcemaps');
const sass = require ('gulp-sass');
const concat = require ('gulp-concat');
const uglify = require ('gulp-uglify');
const postcss = require ('gulp-postcss');


const files= {
    scssPath:'src/style/*.scss',
    jsPath:'src/js/*.js',
    htmlPath: 'src/*.html',
    imagePath: 'src/images/*'
}

function scssTask(){
    return src(files.scssPath)
        .pipe (sourcemaps.init())
        .pipe (sass())
        .pipe (postcss([autoprefixer(),cssnano()]))
        .pipe (sourcemaps.write('.'))
        .pipe(dest('dist/style')
    );
};

function jsTask(){
    return src(files.jsPath)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('dist/js')
    );
};

function htmlTask(){
    return src(files.htmlPath)
        .pipe(dest('dist')
    );
};


function imageTask(){
    return src(files.imagePath)
        .pipe(imagemin())
        .pipe(dest('dist/images')
    );
};



function watchTask(){
        watch([files.scssPath, files.jsPath, files.htmlPath, files.imagePath],
            parallel(scssTask,jsTask, htmlTask, imageTask));
};

exports.default = series(
    parallel(scssTask,jsTask,htmlTask, imageTask),
    watchTask
);