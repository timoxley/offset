var support = require('dom-support')
var contains = require('within-document')

module.exports = function offset(el) {
	var box = { top: 0, left: 0 }
  var doc = el && el.ownerDocument

	if (!doc) {
    console.warn('no document!')
		return
	}

	// Make sure it's not a disconnected DOM node
	if (!contains(el)) {
		return box
	}

  var body = doc.body
	if (body === el) {
		return bodyOffset(el)
	}

	var docEl = doc.documentElement

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof el.getBoundingClientRect !== "undefined" ) {
		box = el.getBoundingClientRect()
	}

	var clientTop  = docEl.clientTop  || body.clientTop  || 0
	var clientLeft = docEl.clientLeft || body.clientLeft || 0
	var scrollTop  = window.pageYOffset || docEl.scrollTop
	var scrollLeft = window.pageXOffset || docEl.scrollLeft

	return {
		top: box.top  + scrollTop  - clientTop,
		left: box.left + scrollLeft - clientLeft
	}
}

function bodyOffset(body) {
	var top = body.offsetTop
	var left = body.offsetLeft

	if (support.doesNotIncludeMarginInBodyOffset) {
		top  += parseFloat(body.style.marginTop || 0)
		left += parseFloat(body.style.marginLeft || 0)
	}

	return {
    top: top,
    left: left
  }
}
