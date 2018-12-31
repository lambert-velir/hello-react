import "core-js/fn/object/assign.js";
import "core-js/fn/array/find.js";
import "core-js/fn/array/find-index.js";
import "core-js/fn/array/fill.js";
import "core-js/fn/array/includes.js";
import "core-js/fn/array/from.js";

// for react 16
// https://facebook.github.io/react/blog/2017/09/26/react-v16.0.html#javascript-environment-requirements
import "core-js/es6/map.js";
import "core-js/es6/set.js";


// window.fetch and window.Promise
import "whatwg-fetch";
import Promise from "promise-polyfill";

if (!window.Promise) {
  window.Promise = Promise;
}
