var d3 = require('d3');
var extend = require('extend');

module.exports = {
	init: init
};

// poistions of vertival line
var positions;
var svg; // d3.js component

function getOption(option) {

	var defaultOption = {
		note: 4,
		mesure: 4,
		width: 500,
		height: 500
	};

	return extend(defaultOption, option || {});
}


function init(element, option) {

	positions = [];

	option = getOption(option);

	if (!option) {
		return;
	}

	svg = d3.select(element)
		.append('svg')
		.attr('width', option.width)
		.attr('height', option.height);

	createTimeLine(400, option.mesure, option.note);

	return positions;
}


function getLine(position, taille) {
	var endY = 168;

	var start = taille ? endY / taille : 0;
	return {
		'x1': position,
		'y1': start,
		'x2': position,
		'y2': endY
	};
}

function createTimeLine(endPosition, mesure, note) {

	var position = 0;
	var space = endPosition / mesure;
	for (var i = 0; i < mesure; i++) {
		svg.append('line')
			.attr(getLine(position))
			.attr('stroke', 'black');

		createSubLine(position, space, note, 2);

		position += space;

		if (i === (mesure - 1)) {
			svg.append('line')
				.attr(getLine(position))
				.attr('stroke', 'black')
				.style('stroke-dasharray', ('3, 3'));
		}
	}
}


function createSubLine(start, space, note, taille, positions) {
	var position = start;

	addPosition(position);

	for (var i = 1; i < note; i++) {


		position += space / note;

		addPosition(position);

		svg.append('line')
			.attr(getLine(position, taille))
			.attr('stroke', 'black');
	}
}

function addPosition(position) {
	positions.push(position);
}