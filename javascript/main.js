/**
 * Main scripts
 */

'use strict';

global.jQuery = require('jquery');

// components
const bootstrap = require('./components/bootstrap');

(function ($) {
  // Init
  $(document).ready(() => {
    bootstrap();
  });
}(jQuery));
