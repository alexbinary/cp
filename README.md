# cp

Simple file/directory copy with promise support 🎉

[![npm](https://img.shields.io/npm/v/@alexbinary/cp.svg)](https://www.npmjs.com/package/@alexbinary/cp)
[![GitHub release](https://img.shields.io/github/release/alexbinary/cp.svg?label="github")](https://github.com/alexbinary/cp/releases/latest)
[![Build Status](https://travis-ci.org/alexbinary/cp.svg)](https://travis-ci.org/alexbinary/cp)
[![dependencies Status](https://david-dm.org/alexbinary/cp/status.svg)](https://david-dm.org/alexbinary/cp)
[![devDependencies Status](https://david-dm.org/alexbinary/cp/dev-status.svg)](https://david-dm.org/alexbinary/cp?type=dev)

Based on [ncp](https://www.npmjs.com/package/ncp) by [mmalecki](https://www.npmjs.com/~mmalecki)

Uses [@alexbinary/promisify](https://www.npmjs.com/package/@alexbinary/promisify) and [@alexbinary/callbackify](https://www.npmjs.com/package/@alexbinary/callbackify) by [alexbinary](https://www.npmjs.com/~alexbinary)

## Install

Install with [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) :

```bash
$ npm install @alexbinary/cp
# or
$ yarn add @alexbinary/cp
```

## Usage

```javascript
let cp = require('@alexbinary/cp')

// copy a file
cp('/source/foo.txt', '/target/foo.txt').then(() => {
  // file /source/foo.txt is copied under /target/foo.txt
  // folder /target is created if it does not exist
})

// copy a folder
cp('/source/folder', '/target/folder').then(() => {
  // folder /source/folder is copied with all its content under /target/folder
  // folder /target is created if it does not exist
})
```

## Documentation

```javascript
let cp = require('@alexbinary/cp')
```

### cp(source, target)

Copies file or directory from `source` to `target`.

If `source` is a directory then it is copied with all its content.

Intermediate directories are created if necessary.

This method supports both Promise and node callback style, and resolves with no arguments.

### cp.sync(source, target)

Synchronous version.

## Licence

MIT
