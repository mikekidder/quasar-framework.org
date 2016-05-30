'use strict';

var html = require('raw!./view.scroll-fire.html');

module.exports = {
  template: html,
  data: {
    loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  methods: {
    bounceImage: function(element) {
      element.velocity('callout.tada', {
        display: null,
        stagger: 200
      });
    }
  }
};
