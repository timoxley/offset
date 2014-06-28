# document-offset

Get offset of a DOM Element or Range within the document.

## Installation

```
$ npm install document-offset
```

### [component(1)](http://component.io):

```
$ component install timoxley/offset
```

## API

### offset(el)

Get offset of an element within the document (relative to the top left
of the document).

Example:

```js
var offset = require('document-offset')
var target = document.getElementById('target')
console.log(offset(target))
// => {top: 69, left: 108}
```

## Credit

Code adapted from jQuery.

## License

MIT
