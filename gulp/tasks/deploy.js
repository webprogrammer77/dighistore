let ftp = require("vinyl-ftp"),
gutil = require("gulp-util");
let conn = ftp.create({
	host: "5.101.127.7",
	user: "dighistore",
	password: "3Q8x6M7u3Q8x6M7u",
	parallel: 10,
	log: gutil.log
});
// let conn = ftp.create({
// 	host: "5.101.127.7",
// 	user: "dighistore",
// 	password: "3Q8x6M7u3Q8x6M7u",
// 	parallel: 10,
// 	log: gutil.log
// });
let conn1 = ftp.create({
	host: "webproks.beget.tech",
	user: "webproks",
	password: "ii06081997ii",
	parallel: 10,
	log: gutil.log
});
module.exports = function () {

    $.gulp.task('deploy', () => {
        return $.gulp.src(['./build/**','!./build/smartbasket/**','!./build/.htaccess','!./build/robots.txt','!./build/grep.php','!./build/metrika.html','!./build/sitemap.xml','!./build/favicon.ico'], { buffer: false })
				.pipe(conn.dest("/www/dighistore.ru/"));
    });
    $.gulp.task('deploy:beget', () => {
        return $.gulp.src(['./build/**','!./build/smartbasket/**','!./build/.htaccess','!./build/robots.txt','!./build/grep.php','!./build/metrika.html','!./build/sitemap.xml','!./build/favicon.ico'], { buffer: false })
				.pipe(conn1.dest("/webprogrammer77.ru/public_html/dighistore/"));
    });
};





