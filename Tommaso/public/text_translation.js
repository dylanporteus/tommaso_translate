"use strict";

(function () {
   console.log('text_translation.js loaded.')
	$('.form-button').click(function(){
		event.preventDefault();
		var transTextUrl = "http://api.openweathermap.org/data/2.5/weather?"
        var appID = "44db6a862fba0b067b1930da0d769e98" /*ENV["TRANSLATE_KEY"]*/
        var engInput = $('.form-input').val() 
        

		$.ajax({
			url: transTextUrl,
			type: "GET",
			data: {"appid": appID, "q": engInput},
			error: function(){
				alert('Oh no! Something went wrong. Please try again')
			},
			success: function(data){
              
              var forecast = parseInt(data.main.temp)
              var conversionF = Math.floor(forecast * 9/5 - 459.67)
           console.log(conversionF)

           $('#result-ita').text("In " +citySelect+ " it's " +conversionF+ " degrees Farenheit")

			}



     })

    })

})();
