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
			
			app.changeBackgroundColor(redValue, greenValue, blueValue, alphaValue);
			app.changeToHexa(redValue, greenValue, blueValue);
		},

		changeBackgroundColor: function(rgbRed, rgbGreen, rgbBlue, alpha) {
			var codeRgba = 'rgba(' + rgbRed + ',' + rgbGreen + ',' + rgbBlue + ',' + alpha +')';
			$('body').css('backgroundColor', codeRgba);
			$('.codeRgba').html(codeRgba);
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