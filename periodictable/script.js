function valueToKey(object, value) {
	let index = Object.values(object).indexOf(value);
	return Object.keys(object)[index];
}

function pushElementCard(elmData) {
	/*let elmData = [
		1, 1.008, "H", "Hydrogen", "Nonmetal", "1s1", 1
	] example
	*/
	
	let core = document.createElement("button");
	core.className = "card";
	core.style.backgroundColor = backgroundColors[shrinkMap[elmData[4]]];
	
	let number = document.createElement("span");
	number.className = "number";
	number.innerHTML = elmData[0];
	core.appendChild(number);

	let mass = document.createElement("span");
	mass.className = "mass";
	mass.innerText = elmData[1];
	core.appendChild(mass);
	
	let icon = document.createElement("b");
	icon.className = "abbr";
	icon.innerText = elmData[2];
	core.appendChild(icon);
	
	let name = document.createElement("name");
	name.className = "elmname";
	name.innerHTML = elmData[3];
	core.appendChild(name);
	
	core.onclick = function() {
		updateInfoDisplay({
			name: elmData[3],
			num: elmData[0],
			mass: elmData[1],
			group: elmData[4],
			conf: elmData[5],
			electronegativity: elmData[7],
			oxidation_states: elmData[8]
		});
	};

	core.style.gridColumn = `${numberToGroup(elmData[0])} / ${numberToGroup(elmData[0])+1}`;
	core.style.gridRow = `${elmData[6]} / ${elmData[6]+1}`;
	core.style.cursor = "hand";
	
	document.querySelector(".table").appendChild(core);
	
	return this;
};

function updateInfoDisplay(data) {
	for(var i in data) {
		document.getElementById("disp_elm"+i).innerText = data[i];
		document.getElementById("disp_elmelectronegativity").innerText = data.electronegativity ?? "Unknown";
		document.getElementById("disp_elmoxidation_states").innerText = data.oxidation_states ?? "0";
		document.getElementById("disp_elmname").innerText = document.getElementById("disp_elmname").innerText.replace("&#9762;", "");
	};	
};

for(var i = 0; i < 118; i++) {
	pushElementCard(elementData[i]);
};

(()=>{
	for(var i in backgroundColors) {
		let color = backgroundColors[i];

		let name = valueToKey(shrinkMap, valueToKey(backgroundColors, color));

		let snippet = document.createElement("b");

		snippet.style.color = color;
		snippet.innerHTML = name;

		document.getElementById("colors").appendChild(snippet);
		document.getElementById("colors").appendChild(document.createElement("br"));
	}
})()