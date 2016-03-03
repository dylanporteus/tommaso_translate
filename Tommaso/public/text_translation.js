"use strict";

(function () {
   console.log('text_translation.js loaded.')
	$('.form-button').click(function(){
		event.preventDefault();
		var transTextUrl = "www.googleapis.com/language/translate/v2?";
        var appKey = ENV["TRANSLATE_KEY"];
        var engInput = $('.form-input').val(); 
        

		$.ajax({
			dataType: "JSON",
			url: transTextUrl,
			type: "GET",
			data: {"key": appKey, "q": engInput},
			error: function(){
				alert('Oh no! Something went wrong. Please try again')
			},
			success: function(data){
				console.log(dataType);
              
               var langSwitch = (data.translations);
       

           // $('#result-ita').text("In " +citySelect+ " it's " +conversionF+ " degrees Farenheit")

			}



     })

    })

})();
