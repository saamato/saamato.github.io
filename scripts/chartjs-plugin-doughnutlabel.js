(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('chart.js')) :
	typeof define === 'function' && define.amd ? define(['chart.js'], factory) :
	(factory(global.Chart));
}(this, (function (Chart) { 'use strict';

Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;

/**
 * @module Options
 */

'use strict';

const defaults = {
	/**
	 * The font options used to draw the label text.
	 * @member {Object|Array|Function}
	 * @prop {String} font.family - defaults to Chart.defaults.global.defaultFontFamily
	 * @prop {Number} font.lineHeight - defaults to 1.2
	 * @prop {Number} font.size - defaults to Chart.defaults.global.defaultFontSize
	 * @prop {String} font.style - defaults to Chart.defaults.global.defaultFontStyle
	 * @prop {Number} font.weight - defaults to 'normal'
	 * @default Chart.defaults.global.defaultFont.*
	 */
	font: {
		family: undefined,
		lineHeight: 1.2,
		size: undefined,
		style: undefined,
		weight: null
	}
};

'use strict';

const helpers$1 = Chart.helpers;

const utils = {

	parseFont: function(value) {
		const global = Chart.defaults.global;
		const size = helpers$1.valueOrDefault(value.size, global.defaultFontSize);
		const font = {
			family: helpers$1.valueOrDefault(value.family, global.defaultFontFamily),
			lineHeight: helpers$1.options.toLineHeight(value.lineHeight, size),
			size: size,
			style: helpers$1.valueOrDefault(value.style, global.defaultFontStyle),
			weight: helpers$1.valueOrDefault(value.weight, null),
			string: ''
		};

		font.string = utils.toFontString(font);
		return font;
	},

	toFontString: function(font) {
		if (!font || helpers$1.isNullOrUndef(font.size) || helpers$1.isNullOrUndef(font.family)) {
			return null;
		}

		return (font.style ? font.style + ' ' : '')
			+ (font.weight ? font.weight + ' ' : '')
			+ font.size + 'px '
			+ font.family;
	},

	textSize: function(ctx, labels) {
		const items = [].concat(labels);
		const ilen = items.length;
		const prev = ctx.font;
		const width = 0;
		const height = 0;
		const i;

		for (i = 0; i < ilen; ++i) {
			ctx.font = items[i].font.string;
			width = Math.max(ctx.measureText(items[i].text).width, width);
			height += items[i].font.lineHeight;
		}

		ctx.font = prev;

		const result = {
			height: height,
			width: width
		};
		return result;
	}

};

'use strict';

const helpers = Chart.helpers;

Chart.defaults.global.plugins.doughnutlabel = defaults;

function drawDoughnutLabel(chart, options) {
	if (options && options.labels && options.labels.length > 0) {
		const ctx = chart.ctx;
		const resolve = helpers.options.resolve;

		const innerLabels = [];
		options.labels.forEach(function(label) {
			const text = typeof(label.text) === 'function' ? label.text(chart) : label.text;
			const innerLabel = {
				text: text,
				font: utils.parseFont(resolve([label.font, options.font, {}], ctx, 0)),
				color: resolve([label.color, options.color, Chart.defaults.global.defaultFontColor], ctx, 0)
			};
			innerLabels.push(innerLabel);
		});

		const textAreaSize = utils.textSize(ctx, innerLabels);

		// Calculate the adjustment ratio to fit the text area into the doughnut inner circle
		const hypotenuse = Math.sqrt(Math.pow(textAreaSize.width, 2) + Math.pow(textAreaSize.height, 2));
		const innerDiameter = chart.innerRadius * 2;
		const fitRatio = innerDiameter / hypotenuse;

		// Adjust the font if necessary and recalculate the text area after applying the fit ratio
		if (fitRatio < 1) {
			innerLabels.forEach(function(innerLabel) {
				innerLabel.font.size = Math.floor(innerLabel.font.size * fitRatio);
				innerLabel.font.lineHeight = undefined;
				innerLabel.font = utils.parseFont(resolve([innerLabel.font, {}], ctx, 0));
			});

			textAreaSize = utils.textSize(ctx, innerLabels);
		}

		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		// The center of the inner circle
		const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
		const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

		// The top Y coordinate of the text area
		const topY = centerY - textAreaSize.height / 2;

		const i;
		const ilen = innerLabels.length;
		const currentHeight = 0;
		for (i = 0; i < ilen; ++i) {
			ctx.fillStyle = innerLabels[i].color;
			ctx.font = innerLabels[i].font.string;

			// The Y center of each line
			const lineCenterY = topY + innerLabels[i].font.lineHeight / 2 + currentHeight;
			currentHeight += innerLabels[i].font.lineHeight;

			// Draw each line of text
			ctx.fillText(innerLabels[i].text, centerX, lineCenterY);
		}
	}
}

Chart.plugins.register({
	id: 'doughnutlabel',
	beforeDatasetDraw: function(chart, args, options) {
		drawDoughnutLabel(chart, options);
	}
});

})));
