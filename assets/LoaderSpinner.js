/*
	TITLE: LoaderSpinner

	DESCRIPTION: Universal Ajax loader &amp; spinner

	VERSION: 0.2.0

	USAGE: var myLoaderSpinner = new LoaderSpinner('Element', 'Options')
		@param {jQuery Object}
		@param {Object}

	AUTHOR: CN

	DEPENDENCIES:
		- jQuery 2.1.4+

*/

var LoaderSpinner = function($el, objOptions) {
	this.$el = $el;
	this.options = $.extend({
		overlayTemplate: '<div class="loader-spinner-overlay"></div>'
	}, objOptions || {});
	this.$elOverlay = $(this.options.overlayTemplate);
};
LoaderSpinner.prototype = {
	addLoader: function() {
		this.$el.append(this.$elOverlay);
		setTimeout(function() {
			this.$elOverlay.click(); //spinner gif gets 'stuck' and needs a click
		}.bind(this), 10);
	},
	removeLoader: function() {
		this.$elOverlay.remove();
	}
};

//uncomment to use as a browserify module
//module.exports = LoaderSpinner;
