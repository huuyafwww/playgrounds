const gulp = require("gulp");
const svgmin = require("gulp-svgmin");

/********************************************
 * svg圧縮
 ********************************************/

gulp.task("svg-minify", () =>
  gulp.src("src/svg/*.svg").pipe(svgmin()).pipe(gulp.dest("src/svg/"))
);
