
var mainTranslate = (function(hindiTranslate){

		console.log(hindiTranslate);
		hindiTranslate.translateToHindi = function(text){
		var translation = "";
		console.log("within my function");
		console.log(text);
		var lexicon = {"happy":"shubh", "mothers":"mataji", "day":"din"};
		var myArray = text.split(" ");
		console.log("myArray",myArray);
		console.log(lexicon.happy);
		for(i=0;i<myArray.length;i++){
			
			for(var j in lexicon){
				if(myArray[i].toLowerCase()===j.toLowerCase())
				{
					translation += lexicon[j] + " ";
					console.log(myArray[i].toLowerCase());	
					console.log(lexicon[j].toLowerCase());
					console.log(j.toLowerCase());
					console.log("translation",translation);
				}
			}

			
		}
		return translation;
		
	}
	return hindiTranslate;
})(mainTranslate);
