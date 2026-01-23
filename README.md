# nodejs-referer-parser

This is our fork of https://www.npmjs.com/package/referer-parser - a very old package.

## Usage

Create a new instance of a Referer object by passing in the url you want to parse:

```js
const { Referer } = require('referer-parser');

referer_url = 'http://www.google.com/search?q=gateway+oracle+cards+denise+linn&hl=en&client=safari';

const r = new Referer(referer_url, currect_url, referers);
```

The `r` variable now holds a Referer instance. The important attributes are:

```js
console.log(r.known); // true
console.log(r.referer); // 'Google'
console.log(r.medium); // 'search'
console.log(r.search_parameter); // 'q'
console.log(r.search_term); // 'gateway oracle cards denise linn'
console.log(r.uri); // result of require('url').parse(...)
```

The attributes would be

```js
console.log(r.known); // true
console.log(r.referer); // null
console.log(r.medium); // 'internal'
console.log(r.search_parameter); // null
console.log(r.search_term); // null
console.log(r.uri); // result of require('url').parse(...)
```

Preparing Loading referers

```js
const { loadReferersRemote } = require('referer-parser');

// Remote source
// loadReferersRemote(URL, converter=JSON.parse)
const referrers = loadReferersRemote(
  'https://s3-eu-west-1.amazonaws.com/snowplow-hosted-assets/third-party/referer-parser/referers-latest.json'
);

// local source
// loadReferers(refererObject)

const { loadReferers } = require('referer-parser');
const path = require('path');
const fs = require('fs');

const dataFile = fs.readFileSync(path.join(__dirname, 'data', 'referers.json'));
const referrers = loadReferers(JSON.parse(dataFile));
```

## Development

This package is not published to any NPM registry. It's installed directly from this repository:

```json
{
  "dependencies": {
    "referer-parser": "https://github.com/WebFX-RD/nodejs-referer-parser.git"
  }
}
```

Therefore, there is no "deploy" step per se. 
The only thing to keep in mind is that you should try to run `npm run build:types` before pushing it to remote to avoid breaking TypeScript consumers.
