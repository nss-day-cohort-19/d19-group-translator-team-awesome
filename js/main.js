console.log("i am here");

//get translate button element
let translate = document.getElementById("translateBtn");


//get output text element
let output = document.getElementById("output");


//set event listener on button element
translate.addEventListener("click", function(){

	//input text
	let translatePhrase = document.getElementById("input").value;

	var whichselected;

	//get selected language option
	var selectLanguage = document.getElementById("languageType");
	//console.log("selectLanguage", selectLanguage);
	for (var i=0; i<selectLanguage.length; i++){
		if(selectLanguage.options[selectLanguage.selectedIndex]){
			whichselected = selectLanguage.options[selectLanguage.selectedIndex].value;
			console.log("whichselected", whichselected);
			break;
		}
	}

	//call corresponding language functions
	if (whichselected == "hindi"){
		console.log(whichselected);
		var outputText = translateToHindi(translatePhrase);
		output.innerHTML = outputText;
	} else if(whichselected == "russian"){
		console.log(whichselected);
		//mainTranslate.translateToRussian(translatePhrase);
	}else if(whichselected == "spanish"){
		console.log(whichselected);
		//mainTranslate.translateToSpanish(translatePhrase);
	}else if(whichselected == "french"){
		console.log(whichselected);
		//mainTranslate.translateToFrench(translatePhrase);
	}


})
	
	





