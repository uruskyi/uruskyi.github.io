var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch');
    // browserSync = require('browser-sync');

    gulp.task('less', function () {
        return gulp.src('app/less/main.less')
            .pipe(less())
            .pipe(gulp.dest('app/css'))
    });

    // gulp.task('browser-sync', function() {	// Створюємо таск browser-sync
    //     browserSync({						// Виконуємо browser Sync
    //         server: {						// Визначаємо параметри сервера
    //             baseDir: 'app'				// Директорія для сервера - app
    //         },
    //         notify: false					// Відключаємо повідомлення зовнішнього ресурсу
    //     });
    // });

    gulp.task('watch', function() {
        gulp.watch('app/less/**/*.less', ['less']); // Нагляд за less файлами, де через кому вказується масив тасків, що будуть виконуватись
        // Нагляд за іншими типами файлів
    });