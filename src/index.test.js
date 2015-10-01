var expect = require('chai').expect;
var jsdom = require('mocha-jsdom');
var sheetMusic = require('./index');

describe('d3-sheet-music', function () {

	jsdom();

	describe('test init with no option', function () {

		var div, positions;

		it('should create the component', function () {

			div = document.createElement('div');

			positions = sheetMusic.init(div);

			expect(positions).to.be.defined;
			expect(div).to.be.defined;
		});

		it('should create the default sheet music position array', function () {

			expect(positions).to.be.a('array');
			expect(positions).to.have.length(16);

		});

		it('should create the svg sheet music', function () {

			expect(div.childNodes[0].nodeName).to.be.equal('svg');
		});
	});

});