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
			console.log(codeRgba);
			app.changeBackgroundColor(codeRgba);
		},

		changeBackgroundColor: function(rgba) {
			console.log('function appelée')
			$('body').css('backgroundColor', rgba);
			$('.codeRgba').html(rgba);
		}

	}

	app.init();
})();