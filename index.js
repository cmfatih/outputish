/*
 * outputish
 * For the full copyright and license information, please view the LICENSE.txt file.
 */

/* jslint node: true */
'use strict';

module.exports = (function() {

  // Returns whether is there a stream on stdin
  var stdinHasPipe = function stdinHasPipe() {
    return (process.stdin.isTTY === true);
  };

  // Returns whether is there a stream on stdout
  var stdoutHasPipe = function stdoutHasPipe() {
    return (process.stdout.isTTY === true);
  };

  process.stdin.pipe(process.stdout);

  return {
    stdinHasPipe:  stdinHasPipe,
    stdoutHasPipe: stdoutHasPipe
  };

})();