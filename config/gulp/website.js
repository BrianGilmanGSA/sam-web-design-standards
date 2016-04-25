var gulp = require('gulp');
var dutil = require('./doc-util');
var spawn = require('cross-spawn');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var runSequence = require('run-sequence');
var del = require('del');
var clean = require('gulp-clean');

var task = /([\w\d-_]+)\.js$/.exec(__filename)[ 1 ];
var taskBuild = task + ':build';
var taskServe = task + ':serve';
var taskDev = task + ':development';

gulp.task('clean-assets', function(done) {
  runSequence(
    [
      'clean-assets-css',
      'clean-assets-js',
      'clean-assets-img',
      'clean-assets-fonts'
    ],
    done
  )
});

gulp.task('clean-assets-css', function(done) {
  runSequence(
    [
      'delete-site-css',
      'delete-site-css-min',
      'delete-site-css-min-map'
    ],
    done
  );
})

gulp.task('delete-site-css', function() {
  return del('assets/css/' + dutil.pkg.name + '.css');
});

gulp.task('delete-site-css-min', function() {
  return del('assets/css/' + dutil.pkg.name + '.min.css');
});

gulp.task('delete-site-css-min-map', function() {
  return del('assets/css/' + dutil.pkg.name + '.min.css.map');
});

gulp.task('clean-assets-js', function(done) {
  runSequence(
    [
      'delete-site-js',
      'delete-site-js-min',
      'delete-site-js-min-map'
    ],
    done
  );
});

gulp.task('delete-site-js', function() {
  return del('assets/js/' + dutil.pkg.name + '.js');
});

gulp.task('delete-site-js-min', function() {
  return del('assets/js/' + dutil.pkg.name + '.min.js');
});

gulp.task('delete-site-js-min-map', function() {
  return del('assets/js/' + dutil.pkg.name + '.min.js.map');
}); 

gulp.task('clean-assets-img', function() {
  return del('assets/img/**/*');
});

gulp.task('clean-assets-fonts', function() {
  return del('assets/fonts/');
});

gulp.task('clean-fonts', function () {
  return del('docs/assets/fonts/');
});
gulp.task('clean-bundled-javascript', function () {
  return del('docs/assets/js/vendor/' + dutil.pkg.name + '.min.js');
});

// gulp.task('clean-generated-assets', function (done) {
//   runSequence(
//     [
//       'clean-source-sass',
//       'clean-fonts',
//       'clean-bundled-javascript',
//     ],
//     done
//   );
// });

// gulp.task('copy-source-sass', function (done) {

//   var copySourceSass = spawn('cp', [
//     '-rvf',
//     'src/stylesheets',
//     'docs/_scss',
//   ]);

//   copySourceSass.stdout.on('data', function (data) {

//     if (/[\w\d]+/.test(data)) {

//       dutil.logData('copy-source-sass', data);

//     }

//   });

//   copySourceSass.on('error', function (error) { done(error); });

//   copySourceSass.on('close', function (code) { if (0 === code) {
//     execSync(
//       'mv -fv docs/_scss/all.scss ' +
//       'docs/_scss/_' + dutil.pkg.name + '.scss'
//     );
//     done();
//   } });

// });

// gulp.task('copy-bundled-javascript', function (done) {

//   var copyBundledJavaScript = spawn('cp', [
//     '-rvf',
//     'dist/js/' + dutil.pkg.name + '.min.js',
//     'docs/assets/js/vendor/',
//   ]);

//   copyBundledJavaScript.stdout.on('data', function (data) {

//     if (/[\w\d]+/.test(data)) {

//       dutil.logData('copy-bundled-javascript', data);

//     }

//   });

//   copyBundledJavaScript.on('error', function (error) { done(error); });

//   copyBundledJavaScript.on('close', function (code) { if (0 === code) { done(); } });

// });

// gulp.task('copy-fonts', function (done) {

//   var copyFonts = spawn('cp', [
//     '-rvf',
//     'dist/fonts',
//     'docs/assets/fonts',
//   ]);

//   copyFonts.stdout.on('data', function (data) {

//     if (/[\w\d]+/.test(data)) {

//       dutil.logData('copy-fonts', data);

//     }

//   });

//   copyFonts.on('error', function (error) { done(error); });

//   copyFonts.on('close', function (code) { if (0 === code) { done(); } });

// });

// gulp.task('copy-images', function (done) {

//   var copyImages = exec('cp -rvf dist/img/* docs/assets/img/', function (error, stdout, stderr) {

//     if (stdout && /[\w\d]+/.test(stdout)) {

//       dutil.logData('copy-images', stdout);

//     }

//     done();

//   });

// });

// gulp.task('copy-assets', [ 'build' ], function (done) {
//   runSequence(
//     'clean-generated-assets',
//     'copy-source-sass',
//     'copy-bundled-javascript',
//     'copy-fonts',
//     'copy-images',
//     done
//   );
// });

// Wrapper task for `bundle install` which installs gems for the Jekyll site.
//
gulp.task('bundle-gems', function (done) {

  var bundle = spawn('bundle');
  
  bundle.stdout.on('data', function (data) {

    if (/[\w\d]+/.test(data)) {

      dutil.logData('bundle-gems', data);

    }

  });

  bundle.on('error', function (error) { done(error); });

  bundle.on('close', function (code) { if (0 === code) { done(); } });

});

// Base task for `gulp website` prints helpful information about available commands.
//
gulp.task(task, function (done) {

  dutil.logIntroduction();

  dutil.logHelp(
    'gulp ' + task,
    'This is the default website task. Please review the available commands.'
 );

  dutil.logCommand(
    'gulp ' + taskBuild,
    'Build the website.'
 );

  dutil.logCommand(
    'gulp ' + taskServe,
    'Preview the website locally and rebuild it when files change.'
 );

  done();

});

// Wrapper task for `jekyll serve --watch` which runs after `gulp bundle-gems` to make sure
// the gems are properly bundled.
//
gulp.task(taskServe, [ 'bundle-gems' ], function (done) {

  gulp.watch([
    'assets/css/styleguide.scss',
    'src/stylesheets/components/**/*.scss',
    'src/stylesheets/elements/**/*.scss',
    'src/stylesheets/core/**/*.scss',
    'src/stylesheets/all.scss',
    '!src/stylesheets/lib/**/*',
  ], function (event) {
    runSequence(
      'clean-assets-css',
      'sass'
    );
  });

  gulp.watch([
    'assets/js/styleguide.js',
    'src/js/**/*.js',
    '!src/js/vendor/**/*',
  ], function (event) {
    runSequence(
      'clean-assets-js',
      'javascript'
    );
  });

  gulp.watch('src/img/**/*', function (event) {
    runSequence(
      'clean-assets-img',
      'images'
    );
  });

  gulp.watch('src/fonts/**/*', function (event) {
    runSequence(
      'clean-assets-fonts',
      'fonts'
    );
  });

  var jekyll = spawn('jekyll', [ 'serve', '-w' ]);

  jekyll.stdout.on('data', function (data) {

    if (/[\w\d]+/.test(data)) {

      data += '';
      data = data.replace(/[\s]+/g, ' ');

      if (/done|regen/i.test(data)) {

        dutil.logMessage(taskServe, data);

      } else {

        dutil.logData(taskServe, data);

      }

    }

  });

  jekyll.on('error', function (error) { done(error); });

  jekyll.on('close', function (code) { if (0 === code) { done(); } });


});

// Wrapper task for `jekyll build` which runs after `gulp bundle-gems` to make sure
// the gems are properly bundled.
//
gulp.task(taskBuild, [ 'bundle-gems' ], function (done) {

  var jekyll = spawn('jekyll', [ 'build' ]);

  jekyll.stdout.on('data', function (data) {

    if (/[\w\d]+/.test(data)) {

      data += '';
      data = data.replace(/[\s]+/g, ' ');
      dutil.logData(taskBuild, data);

    }

  });

  jekyll.on('error', function (error) { done(error); });

  jekyll.on('close', function (code) { if (0 === code) { done(); } });

});
