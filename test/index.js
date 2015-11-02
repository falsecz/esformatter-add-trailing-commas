/*global describe, it, beforeEach*/
'use strict';

var assert = require('assert');
var esformatter = require('esformatter');
var fs = require('fs');
var plugin = require('..');

describe('esformatter-add-trailing-commas', function() {
  beforeEach(function() {
    esformatter.register(plugin);
  });

  it('should add trailing commas on object', function(done) {
    var output = esformatter.format(readfile('fixtures/object.js'));
    assert.equal(output, readfile('expected/object.js'));
    done();
  });

  it('should add trailing commas on array', function(done) {
    var output = esformatter.format(readfile('fixtures/array.js'));
    assert.equal(output, readfile('expected/array.js'));
    done();
  });

  it('should add trailing commas on destructuring object asssigment', function(done) {
    var output = esformatter.format(readfile('fixtures/destructuring-object.js'));
    assert.equal(output, readfile('expected/destructuring-object.js'));
    done();
  });

});

function readfile(name) {
  return fs.readFileSync('test/' + name).toString();
}
