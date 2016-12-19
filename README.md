# cp
Simple promise-based file and directory copy 📑

Can copy individual files or folders.
Create intermediate directories if needed.
Based on [ncp](https://github.com/AvianFlu/ncp).

## Install

Install with npm/yarn :

```
$ npm install https://github.com/alexbinary/cp.git

$ yarn add https://github.com/alexbinary/cp.git
```

## Usage

```javascript
let cp = require('alexbinary.cp')

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

## Licence

MIT
