// https://enzymejs.github.io/enzyme/docs/guides/jsdom.html

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/'
});

global.navigator = { userAgent: 'node.js' };
global.document  = jsdom.window.document;
global.window    = jsdom.window;
