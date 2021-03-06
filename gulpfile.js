var gulp         = require('gulp'),
		sass         = require('gulp-sass'), //Подключаем Sass пакет,
		autoprefixer = require('gulp-autoprefixer'), // Подключаем библиотеку для автоматического добавления префиксов
		cleanCSS     = require('gulp-clean-css'),
		cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
		rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
		browserSync  = require('browser-sync').create(), // Подключаем Browser Sync
		concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)

		del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
		uglify       = require('gulp-uglify'), // Подключаем gulp-uglifyjs (для сжатия JS)
		htmlmin 	 = require('gulp-htmlmin'), // Подключаем  (для сжатия HTML)
		pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
		cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
		imagemin     = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями

gulp.task('browser-sync', ['styles', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});

gulp.task('styles', function () {
	return gulp.src('sass/*.scss')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/modernizr/modernizr.js',
		'./app/libs/jquery/jquery-1.11.2.min.js',
		'./app/libs/waypoints/waypoints.min.js',
		'./app/libs/animate/animate-css.js',
		'./app/libs/bootstrap-validator/validator.min.js',
		'./app/libs/paralax/parallax.min.js',
		'./app/libs/plugins-scroll/plugins-scroll.js',
		'./app/libs/stickup/stickUp.min.js',
		'./app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
		])
		.pipe(concat('libs.js'))
		 .pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});





// Gulp Uglify
gulp.task('gulp-uglify', function(){
	gulp.src('app/js/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('dist/js'))
});


gulp.task('minify', function() {
	return gulp.src('app/*.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('dist'))
});

gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*') // Берем все изображения из app
			.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
				interlaced: true,
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			})))
			.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});


gulp.task('build', ['clean', 'minify', 'img', 'styles', 'scripts'], function() {

	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
				'app/css/main.min.css',
				'app/css/moz.min.css',
				'app/css/fonts.min.css'

			])
			.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
			.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
			.pipe(gulp.dest('dist/js'))


});


gulp.task('clear', function (callback) {
	return cache.clearAll();
})
gulp.task('default', ['browser-sync', 'watch']);
