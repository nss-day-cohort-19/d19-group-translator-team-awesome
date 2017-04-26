console.log("i am here");



var mainTranslate = {};

//get translate button element
	let translate = document.getElementById("translateBtn");


	//get output text element
	let output = document.getElementById("output");
	console.log(output);

	//set event listener on button element
	translate.addEventListener("click", () => {
		//debugger
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

		let clearBtn = document.getElementById("clearBtn");
		clearBtn.addEventListener("click", () => {
			document.getElementById("input").value = "";
			document.getElementById("output").innerHTML = "";
		});

		//call corresponding language functions
		if (whichselected == "hindi"){
			console.log(whichselected);
			var outputText = mainTranslate.translateToHindi(translatePhrase);
			output.innerHTML = outputText;
		} else if(whichselected == "russian"){
			console.log(whichselected);
			outputText = mainTranslate.translateToRussian(translatePhrase);
			output.innerHTML = outputText;
		}else if(whichselected == "spanish"){
			console.log(whichselected);
			var outputText = mainTranslate.translateToSpanish(translatePhrase);
			output.innerHTML = outputText;
		}else if(whichselected == "french"){
			console.log(whichselected);
			var outputText = mainTranslate.translateToFrench(translatePhrase);
			output.innerHTML = outputText;
		}


	});







