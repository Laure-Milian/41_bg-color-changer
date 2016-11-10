(function() {


	var app = {

		init: function() {

			this.listeners();
		},

		listeners: function() {
			$('#inputRed, #inputGreen, #inputBlue, #inputAlpha').on('change', this.defineValues);
		},

		defineValues: function() {
			var redValue = $('#inputRed').val();
			var greenValue = $('#inputGreen').val();
			var blueValue = $('#inputBlue').val();
			var alphaValue = $('#inputAlpha').val();
			var codeRgba = 'rgba(' + redValue + ',' + greenValue + ',' + blueValue + ',' + alphaValue +')';
			app.changeBackgroundColor(codeRgba);

			app.changeToHexa(redValue, greenValue, blueValue);
		},

		changeBackgroundColor: function(rgba) {
			$('body').css('backgroundColor', rgba);
			$('.codeRgba').html(rgba);
		},

		changeToHexa : function(rgbRed, rgbGreen, rgbBlue) {
			var redValueNumber = parseInt(rgbRed, 10);
			var greenValueNumber = parseInt(rgbGreen, 10);
			var blueValueNumber = parseInt(rgbBlue, 10);

			var redHexa = redValueNumber.toString(16);
			var greenHexa = greenValueNumber.toString(16);
			var blueHexa = blueValueNumber.toString(16);

			var codeHexa = ('#' + redHexa + greenHexa + blueHexa).toUpperCase();
			$('.codeHexa').html(codeHexa);
		}

	}

	app.init();
})();