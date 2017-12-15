const app = require('./build/ssr-build/ssr-bundle').default;
const preact = require('preact');
const renderToString = require('preact-render-to-string');

const output = renderToString(preact.h(app, { url: '/' }));
console.log(output);
