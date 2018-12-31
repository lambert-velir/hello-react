const gulp         = require("gulp");
const quench = require("./quench.js");
const sass = require("gulp-dart-sass");
const rename = require("gulp-rename");
const debug = require("gulp-debug");
const header = require("gulp-header");
const concat = require("gulp-concat");
const gulpif = require("gulp-if-else");
const sourcemaps = require("gulp-sourcemaps");
const cleancss = require("gulp-clean-css");
const R = require("ramda");
const numeral = require("numeral");

const postcss = require("gulp-postcss");
const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");


module.exports = function cssTask(taskName, userConfig) {

  const env = quench.getEnv();

  // css settings
  const cssConfig = R.mergeDeepRight({

    sass: {
      // not using "compressed" for production anymore https://github.com/gulp-sourcemaps/gulp-sourcemaps/issues/60
      outputStyle: "expanded"
    },

    cleancss: {
      level: 2,
      debug: false
    },

    cleancssCallback: function logCleancss(details){
      const original = numeral(details.stats.originalSize).format("0.0 b");
      const minified = numeral(details.stats.minifiedSize).format("0.0 b");
      const efficiency = numeral(details.stats.efficiency).format("0%");
      quench.logYellow("clean-css", `${details.name}: ${original} -> ${minified} (${efficiency})`);
    },

    autoprefixer: {
      browsers: ["> 0.5%", "last 2 versions", "Firefox ESR", "ie >= 11"],
      grid: true
    },

    postcssPresetEnv: {
      stage: 3
    }

    /**
     * src      : glob of css files to compile
     * dest     : destination folder
     * filename : *optional, name of output file (-generated will be appended)
     *            will concat all input files into this filename
     * watch    : *optional, files to watch that will trigger a rerun when changed
     *            defaults to src
     * postcss : *optional, override the postcss default plugins
     */

  }, userConfig);


  const { src, dest, filename, watch, base } = cssConfig;

  if (!src || !dest){
    quench.throwError(
      "Css task requires src and dest!\n",
      `Was given ${JSON.stringify(cssConfig, null, 2)}`
    );
  }


  /* css task */
  gulp.task(taskName, function() {

    return gulp.src(src, { base })
      .pipe(quench.drano())
      .pipe(sourcemaps.init())
      .pipe(sass(cssConfig.sass))
      .pipe(postcss(cssConfig.postcss || [
        postcssPresetEnv(cssConfig.postcssPresetEnv),
        autoprefixer(cssConfig.autoprefixer)
      ]))
      .pipe(gulpif(
        // concat the css if the filename is provided
        filename,
        () => concat(filename)
      ))
      .pipe(gulpif(
        // only add the header text if this css isn't compressed
        (cssConfig.sass && cssConfig.sass.outputStyle !== "compressed"),
        () => header("/* This file is generated.  DO NOT EDIT. */ \n")
      ))
      .pipe(rename({
        suffix: "-generated"
      }))
      .pipe(gulpif(
        env.production(),
        () => cleancss(cssConfig.cleancss, cssConfig.cleancssCallback)
      ))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest(dest || cssConfig.dest))
      .pipe(debug({ title: `${taskName}: ` }));
  });


  // register the watcher for this task
  quench.maybeWatch(taskName, watch || src);

};
