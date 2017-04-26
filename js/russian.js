
var mainTranslate = (function(russianTranslate){

		console.log(russianTranslate);
		russianTranslate.translateToRussian = function(text){
		var rusTranslation = "";
		console.log("within my function");
		console.log(text);
		var russianLexicon = {"happy":"Schastlivy", "mothers":"Materi", "day":"Den"};
		var russianArray = text.split(" ");
		console.log("russianArray",russianArray);
		console.log(russianLexicon.happy);
		for(i=0;i<russianArray.length;i++){

			for(var j in russianLexicon){
				if(russianArray[i].toLowerCase()===j.toLowerCase())
				{
					rusTranslation += russianLexicon[j] + " ";
					console.log(russianArray[i]);
					console.log(russianLexicon[j]);
					console.log(j);
					console.log("rusTranslation",rusTranslation);
				}
			}


		}
		return rusTranslation;

	}
	return russianTranslate;
})(mainTranslate);
