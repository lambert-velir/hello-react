/**
 *  See ./readme.md for usage
**/

// Include gulp and plugins
const gulp   = require("gulp");
const quench = require("./quench/quench.js");
const path   = require("path");


const projectRoot = path.resolve(__dirname, "..");

const buildTask = require("./tasks/build.js")(projectRoot);

/**
 * gulp build
 *
 * to build for prduction/jenkins:
 *    gulp build --no-watch --env production
 */
gulp.task("build", buildTask);



/* gulp */
gulp.task("default", quench.logHelp);
