/** @license Apache-2.0 */

'use strict';

/**
* Reinterpret a `Complex64Array` as a `Float32Array`.
*
* @module @stdlib/strided-base-reinterpret-complex64
*
* @example
* var Complex64Array = require( '@stdlib/array-complex64' );
* var reinterpret = require( '@stdlib/strided-base-reinterpret-complex64' );
*
* var x = new Complex64Array( 10 );
*
* var out = reinterpret( x, 0 );
* // returns <Float32Array>
*
* var bool = ( out.buffer === x.buffer );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
