// eid-javascript-lib version 1.0

// Copyright (c) 2009 Johan De Schutter (eidjavascriptlib@gmail.com), http://code.google.com/p/eid-javascript-lib/

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * create namespace javascript.base 
 */ 
if (!window.javascript) window.javascript = new Object();
if (!javascript.base) javascript.base = new Object();

/**
 * Exception object and extended objects will work on Windows in Internet Explorer 5.5 and higher, in Mozilla Firefox 2 and higher,
 * and in Opera 9 and higher. Other browsers and other platforms are untested.
 *
 * Usage:
 *
 *	try {
 * 		if (a == 1)
 *			throw new javascript.base.IllegalArgumentException("My message"); 
 *		else if (a == 2)
 *			throw new javascript.base.NullPointerException("My message"); 
 *		else
 *			throw new javascript.base.Exception("My message"); 
 *	} catch (e) {
 * 		if (e instanceof javascript.base.IllegalArgumentException) {
 *   		window.alert(e); // shows IllegalArgumentException: My message
 *		} else if (e instanceof javascript.base.NullPointerException) {
 *			window.alert(e.message); // shows My message
 *		} else {
 *			window.alert("Unknown exception: " + e.message); // shows Unknown exception: My message
 *		}
 *	}  
 */ 

/**
 * Exception extends native javascript Error object
 */

/**
 * Constructor
 */
javascript.base.Exception = function(s) {
	if (s !== undefined)
		this.message = "" + s;
	else
		this.message = "";	
};
javascript.base.Exception.prototype = new Error;
javascript.base.Exception.prototype.name = "Exception";
javascript.base.Exception.prototype.toString = function() {	
	return this.name + ": " + this.message;
};

/**
 * IllegalArgumentException extends Exception
 */

/**
 * Constructor
 */
javascript.base.IllegalArgumentException = function(s) {	
	javascript.base.Exception.call(this, s); // IE 5.5+
};
javascript.base.IllegalArgumentException.prototype = new javascript.base.Exception;
javascript.base.IllegalArgumentException.prototype.name = "IllegalArgumentException";

/**
 * NullPointerException extends Exception
 */

/**
 * Constructor
 */
javascript.base.NullPointerException = function(s) {
	javascript.base.Exception.call(this, s); // IE 5.5+	
};
javascript.base.NullPointerException.prototype = new javascript.base.Exception;
javascript.base.NullPointerException.prototype.name = "NullPointerException";