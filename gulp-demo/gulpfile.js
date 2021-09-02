//import gulp module and it's plugins
const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const less = require("gulp-less");
const csso = require("gulp-csso");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

//gulp.task(arg1,arg2) create tasks
//1. arg1 = task's name
//2. arg2 = callback function for the task

gulp.task("first", async function () {
  console.log("my first gulp task");
  //1.gulp.src(url) to input the src file
  //2.gulp.dest(url) to output the result file
  gulp.src("./src/css/base.css").pipe(gulp.dest("dist/css"));
});

//html tasks:
//1. extract the common parts
//2. minify html

gulp.task("htmlmin", () => {
  return gulp
    .src("src/*.html")
    .pipe(fileinclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

//css tasks:
//1.convert .less files to .css files
//2.minify css

gulp.task("cssmin", () => {
  return gulp
    .src(["src/css/*.less", "src/css/*.css"]) // select all css and less files
    .pipe(less()) // convert less files to css files
    .pipe(csso()) // minify css files
    .pipe(gulp.dest("dist/css")); //save the results at dist/css folder
});

//js tasks
//1. convert es6 to old version (ex. es5)
//2. minify js

gulp.task("jsmin", () => {
  return (
    gulp
      .src("src/js/*.js")
      // can determine the present programming environment and converts the code to its responding version
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      .pipe(uglify())
      .pipe(gulp.dest("dist/js"))
  );
});

// copy files
gulp.task("copy", async function () {
  gulp.src("src/images/*").pipe(gulp.dest("dist/images"));
  gulp.src("src/lib/*").pipe(gulp.dest("dist/lib"));
});

//combine all tasks into default
gulp.task("default", gulp.series("htmlmin", "cssmin", "jsmin", "copy"));
