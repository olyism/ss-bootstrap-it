/**
 * browserify task
 *
 * Bundle javascripty things with browserify!
 * This task is set up to generate multiple separate bundles, from
 * different sources, and to use Watchify when run from the default task.
 * See browserify.bundleConfigs in gulp/config.js
 */

import gulp from 'gulp';

import browserify from 'browserify';
import watchify from 'watchify';
import bundleLogger from '../util/bundleLogger';
import handleErrors from '../util/handleErrors';
import source from 'vinyl-source-stream';
import babelify from 'babelify';

const OPTS = require('../config').config.browserify;

gulp.task('browserify', ['eslint'], (callback) => {

  let bundleQueue = OPTS.bundleConfigs.length;

  let browserifyThis = (bundleConfig) => {

    let bundler = browserify({
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: false,
      // Specify the entry point of your app
      entries: bundleConfig.entries,
      // Add file extensions to make optional in your requires
      extensions: OPTS.extensions,
      // Enable source maps!
      debug: OPTS.debug
    });

    let bundle = () => {
      // Log when bundling starts
      bundleLogger.start(bundleConfig.outputName);

      return bundler
        .bundle()
        // Report compile errors
        .on('error', handleErrors)
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specify the
        // desired output filename here.
        .pipe(source(bundleConfig.outputName))
        // Specify the output destination
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    bundler.transform(babelify.configure())
      .transform({global: true}, 'uglifyify');

    if (global.isWatching) {
      // Wrap with watchify and rebundle on changes
      bundler = watchify(bundler);
      // Rebundle on update
      bundler.on('update', bundle);
    }

    let reportFinished = () => {
      // Log when bundling completes
      bundleLogger.end(bundleConfig.outputName);

      if (bundleQueue) {
        bundleQueue--;
        if (bundleQueue === 0) {
          // If queue is empty, tell gulp the task is complete.
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          callback();
        }
      }
    };

    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  OPTS.bundleConfigs.forEach(browserifyThis);
});
