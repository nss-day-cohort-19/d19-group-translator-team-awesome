console.log("Spanish Translate");

var mainTranslate = (function(spanishTranslate){
	console.log(spanishTranslate);
	spanishTranslate.translateToSpanish = function(event){
		var spanTranslation = "";
		console.log("Spanish Translation");
		console.log(event);

		var spanishLexicon = {"happy":"Feliz", "mothers":"Madre", "day":"Dia"};
		var space = " ";

		var spanishArray = event.split(" ");
		console.log("spanishArray", spanishArray);
		console.log(spanishLexicon.happy + space + spanishLexicon.mothers + space + spanishLexicon.day);

		for(var i = 0; i < spanishArray.length; i++){

			for(var x in spanishLexicon) {
				if(spanishArray[i].toLowerCase() === x.toLowerCase()) {
					spanTranslation += spanishLexicon[x] + " ";
					console.log(spanishArray[i]);
					console.log(spanishLexicon[x]);
					console.log(x);
					console.log("spanTranslation", spanTranslation);
				}
			}
		}
		return spanTranslation;
	}

	return spanishTranslate;

})(mainTranslate);