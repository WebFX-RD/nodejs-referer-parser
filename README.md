# referer-parser node.js (JavaScript) library

Updated implementation [referer-parser][referer-parser] that requires you to feed your own referers for parsing instead of loading from within packages.

Provides access to two methods for loading and preparing the referrers object.

This is the node.js (JavaScript) implementation of [referer-parser][referer-parser], the library for extracting search marketing data from referer _(sic)_ URLs.

The Javascript version of referer-parser is maintained by [Martin Katrenik][mkatrenik].

## Installation

    $ npm install referer-parser

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

## Copyright and license

The referer-parser node.js (JavaScript) library is copyright 2013 Martin Katrenik.

Licensed under the [Apache License, Version 2.0][license] (the "License");
you may not use this software except in compliance with the License.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

[referer-parser]: https://github.com/snowplow/referer-parser
[mkatrenik]: https://github.com/mkatrenik
[license]: http://www.apache.org/licenses/LICENSE-2.0
