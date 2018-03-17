var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

    gulp.task('less', function () {
        return gulp.src('app/less/**/*.less')
            .pipe(less())
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
    });

    gulp.task('browser-sync', function() {	// Створюємо таск browser-sync
        browserSync({						// Виконуємо browser Sync
            server: {						// Визначаємо параметри сервера
                baseDir: 'app'				// Директорія для сервера - app
            },
            notify: false					// Відключаємо повідомлення зовнішнього ресурсу
        });
    });

    gulp.task('watch', ['browser-sync', 'less'], function() {
        gulp.watch('app/less/**/*.less', ['less']);			// Нагляд за less файлами у папці less
        gulp.watch('app/*.html', browserSync.reload);		// Нагляд за HTML файлами у корені проекта
        gulp.watch('app/js/**/*.js', browserSync.reload);	// Нагляд за JS файлами у папці js
    });