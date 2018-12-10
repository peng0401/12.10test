var gulp = require("gulp");

var server = require("gulp-webserver");

gulp.task("server",() => {
  return gulp.src("src")
  .pipe(server({
      port : 9997,
      proxies : [{
        source : "localhost:9997",
        target : "http://10.1.6.118:3000/users/api/userlist"
      }]
  }))
})