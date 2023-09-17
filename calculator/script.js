let input = document.getElementById("input");
        let output = document.getElementById("output");
        let ans;

        function parseMathematicalString(string) {
            return eval(
                string.replace(/\^/g, "**")
                .replace(/π/g, Math.PI+"")
                .replace(/e/g, Math.E+"")
                .replace(/Ans/g, ans)
            );
        };

        function handleButtonPress(id) {
            switch(id) {
                case "1":
                    input.innerText += "1";
                    output.innerText = "";
                    return;
                
                case "2":
                    input.innerText += "2";
                    output.innerText = "";
                    return;

                case "3":
                    input.innerText += "3";
                    output.innerText = "";
                    return;

                case "4":
                    input.innerText += "4";
                    output.innerText = "";
                    return;

                case "5":
                    input.innerText += "5";
                    output.innerText = "";
                    return;

                case "6":
                    input.innerText += "6";
                    output.innerText = "";
                    return;

                 case "7":
                    input.innerText += "7";
                    output.innerText = "";
                    return;

                case "8":
                    input.innerText += "8";
                    output.innerText = "";
                    return;

                case "9":
                    input.innerText += "9";
                    output.innerText = "";
                    return;

                case "0":
                    input.innerText += "0";
                    output.innerText = "";
                    return;

                case "plus":
                    if(input.innerText.length) input.innerText += "+";
                    return;

                case "minus":
                    if(input.innerText.length) input.innerText += "-";
                    return;

                 case "division":
                    if(input.innerText.length) input.innerText += "/";
                    return;

                case "multiply":
                    if(input.innerText.length) input.innerText += "*";
                    return;

                case "enter":
                    if(input.innerText.length) output.innerText = parseMathematicalString(input.innerText);
                    ans = Number(output.innerText);
                    return;
                
                case "sqrt":
                    if(input.innerText.length) output.innerText = Math.sqrt(parseMathematicalString(input.innerText));
                    ans = Number(output.innerText);
                    return;
                
                case "clear":
                    input.innerText = "";
                    output.innerText = "";
                    return;

                case "percent":
                    output.innerText = output.innerText = parseMathematicalString(input.innerText)/100;
                    ans = Number(output.innerText);
                    return;

                case "exponent":
                    if(input.innerText.length) input.innerText += "^";
                    return;

                case "pi":
                    input.innerText += "π";
                    output.innerText = "";
                    return;

                case "e":
                    input.innerText += "e";
                    output.innerText = "";
                    return;

                case "ans":
                    if(ans) input.innerText += "Ans";
                    output.innerText = "";
                    return;

                case "square":
                    if(input.innerText.length) input.innerText += "^2";
                    return;

                case "cbrt":
                    if(input.innerText.length) output.innerText = Math.cbrt(parseMathematicalString(input.innerText));
                    ans = Number(output.innerText);
                    return;

                default:
                    return;
            };
        };

        document.addEventListener("click", (x) => {
    if(x.target instanceof HTMLButtonElement || x.target.parentElement instanceof HTMLButtonElement) handleButtonPress(x.target.id);
});
