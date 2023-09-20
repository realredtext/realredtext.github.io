let input = document.getElementById("input");
let output = document.getElementById("output");
let ans;
let stored;
let displayingAnswer = false;

function parseMathematicalString(string) {			
	return eval(
		string.replace(/\^/g, "**")
		.replace(/π/g, Math.PI+"")
		.replace(/e/g, Math.E+"")
		.replace(/Ans/g, ans)
	);
};

function ruinDegrees(x) { //what kind of mouth breathers think radians are better than degrees
	return (x * (Math.PI/180))%((180/Math.PI) * 6);
}

function handleButtonPress(id) {
	switch(id) {
		case "1":
			if(displayingAnswer) {
				input.innerText = "1";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "1";
			output.innerText = "";
			return;
			    
		case "2":
			if(displayingAnswer) {
				input.innerText = "2";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "2";
			output.innerText = "";
			return;

		case "3":
			if(displayingAnswer) {
				input.innerText = "3";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "3";
			output.innerText = "";
			return;

		case "4":
			if(displayingAnswer) {
				input.innerText = "4";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "4";
			output.innerText = "";
			return;

		case "5":
			if(displayingAnswer) {
				input.innerText = "5";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "5";
			output.innerText = "";
			return;

		case "6":
			if(displayingAnswer) {
				input.innerText = "6";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "6";
			output.innerText = "";
			return;

		case "7":
			if(displayingAnswer) {
				input.innerText = "7";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "7";
			output.innerText = "";
			return;

		case "8":
			if(displayingAnswer) {
				input.innerText = "8";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "8";
			output.innerText = "";
			return;

		case "9":
			if(displayingAnswer) {
				input.innerText = "9";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "9";
			output.innerText = "";
			return;

		case "0": //TODO: prevent octal syntax weirdness
			if(displayingAnswer) {
				input.innerText = "0";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "0";
			output.innerText = "";
			return;

		case "plus":
			if(input.innerText.length) {
				input.innerText += "+";
			} else if(typeof ans === "number") {
				input.innerText += "Ans+";
			 };
			return;

		case "minus":
			if(input.innerText.length) {
				input.innerText += "-";
			} else if(typeof ans === "number") {
				input.innerText += "Ans-";
			};
			return;

		case "division":
			if(input.innerText.length) {
				input.innerText += "/";
			} else if(typeof ans === "number") {
				input.innerText += "Ans/";
			};
			return;

		case "multiply":
			if(input.innerText.length) {
				input.innerText += "*";
			} else if(typeof ans === "number") {
				input.innerText += "Ans*";
			};
			return;

		case "enter":
			if(input.innerText.length) output.innerText = parseMathematicalString(input.innerText);
			ans = Number(output.innerText);
			displayingAnswer = true;
			return;
                
		case "sqrt":
			if(input.innerText.length) output.innerText = Math.sqrt(parseMathematicalString(input.innerText));
			ans = Number(output.innerText);
			displayingAnswer = true;
			return;
                
		case "clear":
			input.innerText = "";
			output.innerText = "";
			displayingAnswer = false;
			return;

		case "percent":
			if(input.innerText.length) output.innerText = output.innerText = parseMathematicalString(input.innerText)/100;
			ans = Number(output.innerText);
			displayingAnswer = true;
			return;

		case "exponent":
			if(input.innerText.length) {
				input.innerText += "^";
			} else if(ans) {
				input.innerText += "Ans^";
			};
			return;

		case "pi":
			if(displayingAnswer) {
				input.innerText = "π";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "π";
			output.innerText = "";
			return;

		case "e":
			if(displayingAnswer) {
				input.innerText = "e";
				displayingAnswer = false;
				output.innerText = "";
				return;
			};
			displayingAnswer = false;
			input.innerText += "e";
			output.innerText = "";
			return;

		case "ans":
			if(!ans) return;
			if(displayingAnswer) {
				input.innerText = "Ans";
				displayingAnswer = false;
				return;
			}
			input.innerText += "Ans";
			output.innerText = "";
			return;

		case "square":
			if(input.innerText.length) {
				input.innerText += "^2";
			} else if(ans) {
				input.innerText += "Ans^2";
			};
			return;

		case "cbrt":
			if(input.innerText.length) output.innerText = Math.cbrt(parseMathematicalString(input.innerText));
			ans = Number(output.innerText);
			displayingAnswer = true;
			return;
					
		case "decimal":
			input.innerText += ".";
			output.innerText = "";
			return;
					
		case "backspace":
			if(input.innerText.length) input.innerText = input.innerText.slice(0, input.innerText.length - 1);
			return;
					
		case "sto":
			if(input.innerText.length) stored = parseMathematicalString(input.innerText);
			output.innerText = "";
			input.innerText = "";
			displayingAnswer = false;
			return;
			
		case "ston":
			if(input.innerText.length) stored = parseMathematicalString(input.innerText)*-1;
			output.innerText = "";
			input.innerText = "";
			displayingAnswer = false;
			return;
					
		case "rcl":
			if(!stored) return;
			output.innerText = "";
			input.innerText = stored+"";
			return;

		case "mclr": 
			stored = undefined;
			return;

		case "sin":
			if(input.innerText.length) output.innerText = Math.sin(ruinDegrees(parseMathematicalString(input.innerText)));
			ans = Number(output.innerText);
			displayingAnswer = true;
			return;

		case "cos":
			if(input.innerText.length) output.innerText = Math.cos(ruinDegrees(parseMathematicalString(input.innerText)));
			ans = Number(output.innerText);
			displayingAnswer = true;
			return;

		case "tan":
			if(input.innerText.length) output.innerText = Math.tan(ruinDegrees(parseMathematicalString(input.innerText)));
			ans = Number(output.innerText);
			displayingAnswer = true;
			return;

		case "cot":
			if(input.innerText.length) output.innerText = 1/Math.tan(ruinDegrees(parseMathematicalString(input.innerText)));
			ans = Number(output.innerText);
			displayingAnswer = true;
			return;

		case "sec":
			if(input.innerText.length) output.innerText = 1/Math.cos(ruinDegrees(parseMathematicalString(input.innerText)));
			ans = Number(output.innerText);
			displayingAnswer = true;
			return;

		case "csc":
			if(input.innerText.length) output.innerText = 1/Math.sin(ruinDegrees(parseMathematicalString(input.innerText)));
			ans = Number(output.innerText);
			displayingAnswer = true;
			return;

		default:
			return;
	};
};

document.addEventListener("click", (x) => {
	if(x.target instanceof HTMLButtonElement || x.target.parentElement instanceof HTMLButtonElement) handleButtonPress(x.target.id);
});
