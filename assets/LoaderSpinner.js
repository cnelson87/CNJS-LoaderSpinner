/*
	TITLE: LoaderSpinner

	DESCRIPTION: Universal Ajax loader &amp; spinner

	VERSION: 0.1.0

	USAGE: var myLoaderSpinner = new LoaderSpinner('Element', 'Options')
		@param {jQuery Object}
		@param {Object}

	AUTHORS: CN

	DEPENDENCIES:
		- jQuery 1.10+

*/

var LoaderSpinner = function($el, objOptions) {
	this.$el = $el;
	this.options = $.extend({
		overlayTemplate: '<div class="overlay"></div>',
		spinnerTemplate: '<div class="spinner"></div>'
	}, objOptions || {});
	this.$elOverlay = $(this.options.overlayTemplate);
	this.$elSpinner = $(this.options.spinnerTemplate);
};
LoaderSpinner.prototype = {
	addLoader: function() {
		this.$el.append(this.$elOverlay, this.$elSpinner);
		setTimeout(function() {
			this.$elSpinner.click(); //spinner gif gets 'stuck' and needs a click
		}.bind(this), 10);
	},
	removeLoader: function() {
		this.$elOverlay.remove();
		this.$elSpinner.remove();
	}
};


//uncomment to use as a browserify module
//module.exports = LoaderSpinner;
