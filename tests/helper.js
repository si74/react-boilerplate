require('babel-register')();

const jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
global.navigator = { userAgent: 'node.js' };
