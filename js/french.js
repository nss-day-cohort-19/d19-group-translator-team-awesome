console.log("french.js loaded");

var mainTranslate = function(frenchTranslate) {

	console.log(frenchTranslate);
	frenchTranslate.translateToFrench = function(text){
		console.log(text);
		var translation = "";
		var lexicon = {"happy":"bonne","mothers":"mere","day":"journee"};
		var myArray = text.split(" ");
		console.log(myArray);
		for(n=0;n<myArray.length; n+=1){
			for (i in lexicon) {
				if(myArray[n] == i) {
					myArray[n] = lexicon[i] + " ";
				}
			}
		}
		translation = myArray.join();
		translation = translation.replace(/,/g, "");
		console.log(translation);
		return translation;
	}
	return frenchTranslate;
}(mainTranslate);