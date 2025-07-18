/*
	TODO: ADD MELTING/BOILING POINTS @1 ATM
	ADD SUBGROUPS
 (ts never getting done :broken_heart:)
*/


let elementData = [ //atomic number, atomic mass, abbr., name, group, electron configuration, row, electronegativity, oxidation states
	["1", 1.008, "H", "Hydrogen", "Nonmetal", "1s1", "1", 2.2, "-1 +1"],
	["2", 4.002, "He", "Helium", "Noble Gas", "1s2", "1", undefined],
	["3", 7, "Li", "Lithium", "Alkali Metal", "1s2 2s1", "2", 0.98, "+1"],
	["4", 9.012, "Be", "Beryllium", "Alkali Earth Metal", "1s2 2s2", "2", 1.57, "+2"],
	["5", 10.81, "B", "Boron", "Metalloid", "1s2 2s2 2p1", "2", 2.04, "-5 -1 +3"],
	["6", 12.011, "C", "Carbon", "Nonmetal", "1s2 2s2 2p2", "2", 2.55, "-4 +4"], //carbogen group
	["7", 14.007, "N", "Nitrogen", "Nonmetal", "1s2 2s2 2p3", "2", 3.04, "-3 +3 +5"], //pnictogen group
	["8", 15.999, "O", "Oxygen", "Nonmetal", "1s2 2s2 2p4", "2", 3.44, "-2 +2"], //chalcogen group
	["9", 18.998, "F", "Fluorine", "Halogen", "1s2 2s2 2p5", "2", 3.98, "-1"], //halogen group
	["10", 20.180, "Ne", "Neon", "Noble Gas", "1s2 2s2 2p6", "2", undefined, "0"],
	["11", 22.989, "Na", "Sodium", "Alkali Metal", "1s2 2s2 2p6 3s1", 3, 0.93, "+1"],
	["12", 24.305, "Mg", "Magnesium", "Alkali Earth Metal", "1s2 2s2 2p6 3s2", 3, 1.31, "+2"],
	["13", 26.981, "Al", "Aluminum", "Post-Transition Metal", "1s2 2s2 2p6 3s2 3p1", 3, 1.61, "-2 +3"],
	["14", 28.085, "Si", "Silicon", "Metalloid", "1s2 2s2 2p6 3s2 3p2", 3, 1.9, "-4 +4"],
	["15", 30.973, "P", "Phosphorus", "Nonmetal", "1s2 2s2 2p6 3s2 3p3", 3, 2.19, "-3 +3 +5"],
	["16", 32.07, "S", "Sulfur", "Nonmetal", "1s2 2s2 2p6 3s2 3p4", 3, 2.58, "-2 +2 +4 +6"],
	["17", 35.45, "Cl", "Chlorine", "Halogen", "1s2 2s2 2p6 3s2 3p5", 3, 3.16, "-1 +1 +3 +5 +7"],
	["18", 39.9, "Ar", "Argon", "Noble Gas", "1s2 2s2 2p6 3s2 3p6", 3],
	["19", 39.098, "K", "Potassium", "Alkali Metal", "1s2 2s2 2p6 3s2 3p6 4s1", 4, 0.82, "+1"],
	["20", 40.08, "Ca", "Calcium", "Alkali Earth Metal", "1s2 2s2 2p6 3s2 3p6 4s2", 4, 1, "+2"],
	["21", 44.955, "Sc", "Scandium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d1", 4, 1.36, "+3"], //ah shit here comes 3d
	["22", 47.867, "Ti", "Titanium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d2", 4, 1.54, "-2 +4"],
	["23", 50.941, "V", "Vanadium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d3", 4, 1.63, "-3 -1 +5"],
	["24", 51.996, "Cr", "Chromium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s1 3d5", 4, 1.66, "-4 -2 +2 +3 +4 +6"],
	["25", 54.938, "Mn", "Manganese", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d5", 4, 1.55, "-3 +2 +4 +7"],
	["26", 55.84, "Fe", "Iron", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d6", 4, 1.83, "-4 -2 +2 +3 +6"],
	["27", 58.933, "Co", "Cobalt", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d7", 4, 1.88, "-3 -1 +2 +3 +5"],
	["28", 58.963, "Ni", "Nickel", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d8", 4, 1.91, "-2 +2 +4"],
	["29", 63.55, "Cu", "Copper", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s1 3d10", 4, 1.9, "-2 0 +2 +4"],
	["30", 65.4, "Zn", "Zinc", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10", 4, 1.65, "-2 0 +2"],
	["31", 69.723, "Ga", "Gallium", "Post-Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1", 4, 1.81, "-5 -4 -2 +3"],
	["32", 72.63, "Ge", "Germanium", "Metalloid", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2", 4, 2.01, "-4 +2 +4"],
	["33", 74.921, "As", "Arsenic", "Metalloid", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3", 4, 2.18, "-3 +3 +5"],
	["34", 78.97, "Se", "Selenium", "Nonmetal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4", 4, 2.55, "-2 +2 +4 +6"],
	["35", 79.90, "Br", "Bromine", "Halogen", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5", 4, 2.96, "-1 +1 +3 +5 +7"],
	["36", 83.8, "Kr", "Krypton", "Noble Gas", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6", 4, 3, "+2"],
	["37", 85.468, "Rb", "Rubidium", "Alkali Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1", 5, 0.82, "+1"],
	["38", 87.62, "Sr", "Strontium", "Alkali Earth Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2", 5, 0.95, "+2"],
	["39", 88.905, "Y", "Yttrium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1", 5, 1.22, "+3"],
	["40", 91.22, "Zr", "Zirconium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2", 5, 1.33, "-2 0 +4"],
	["41", 92.906, "Nb", "Niobium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4", 5, 1.6, "-3 -1 +5"],
	["42", 95.95, "Mo", "Molybdenum", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5", 5, 2.16, "-4 -2 +4 +6"],
	["43", 96.906, "Tc", "Technetium&#9762;", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5", 5, 1.9, "-3 -1 +4 +7"],
	["44", 101.1, "Ru", "Ruthenium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7", 5, 2.2, "-4 -2 0 +2 +3 +4 +8"],
	["45", 102.905, "Rh", "Rhodium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8", 5, 2.28, "-3 -1 +3 +6"],
	["46", 106.42, "Pd", "Palladium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d10", 5, 2.2, "+2 +4 +6"],
	["47", 107.868, "Ag", "Silver", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10", 5, 1.93, "-2 +1 +4"],
	["48", 112.41, "Cd", "Cadmium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10", 5, 1.69, "-2 0 +2"],
	["49", 114.818, "In", "Indium", "Post-Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p1", 5, 1.78, "-5 -2 +3"],
	["50", 118.71, "Sn", "Tin", "Post-Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2", 5, 1.96, "-4 +2 +4"],
	["51", 121.76, "Sb", "Antimony", "Metalloid", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3", 5, 2.05, "-3 +3 +5"],
	["52", 127.6, "Te", "Tellurium", "Metalloid", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4", 5, 2.1, "-2 +2 +4 +6"],
	["53", 126.904, "I", "Iodine", "Halogen", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5", 5, 2.66, "-1 +1 +3 +5 +7"],
	["54", 131.29, "Xe", "Xenon", "Noble Gas", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6", 5, 2.6, "+2 +4 +6 +8"],
	["55", 132.905, "Cs", "Cesium", "Alkali Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1", 6, 0.79, "+1"],
	["56", 137.33, "Ba", "Barium", "Alkali Earth Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2", 6, 0.89, "+2"],
	["57", 138.905, "La", "Lanthanum", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1", 8, 1.1, "+3"], //uh oh
	["58", 140.116, "Ce", "Cerium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 5d1 4f1", 8, 1.12, "+3 +4"],
	["59", 140.907, "Pr", "Praseodymium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3", 8, 1.13, "+2 +3 +4"],
	["60", 144.24, "Nd", "Neodymium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4", 8, 1.14, "+2 +3 +4"],
	["61", 144.912, "Pm", "Promethium&#9762;", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5", 8, 1.13, "+2 +3"],
	["62", 150.4, "Sm", "Samarium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6", 8, 1.17, "+2 +3"],
	["63", 151.964, "Eu", "Europium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7", 8, 1.2, "+2 +3"],
	["64", 157.2, "Gd", "Gadolinium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1", 8, 1.2, "+3"],
	["65", 158.925, "Tb", "Terbium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9", 8, 1.22, "+2 +3 +4"],
	["66", 162.5, "Dy", "Dysprosium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10", 8, 1.23, "+2 +3 +4"],
	["67", 164.930, "Ho", "Holmium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11", 8, 1.24, "+2 +3"],
	["68", 167.26, "Er", "Erbium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12", 8, 1.24, "+2 +3"],
	["69", 168.934, "Tm", "Thulium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13", 8, 1.25, "+2 +3"],
	["70", 173.05, "Yb", "Ytterbium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14", 8, 1.1, "+2 +3"],
	["71", 174.966, "Lu", "Lutetium", "Lanthanide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1", 8, 1.27, "+2 +3"],
	["72", 178.49, "Hf", "Hafnium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2", 6, 1.3, "-2 +1 +4"],
	["73", 180.947, "Ta", "Tantalum", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3", 6, 1.5, "-3 -1 +5"],
	["74", 183.84, "W", "Tungsten", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4", 6, 2.36, "-4 -2 +4 +6"],
	["75", 186.207, "Re", "Rhenium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5", 6, 1.9, "-3 -1 +4 +7"],
	["76", 190.2, "Os", "Osmium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6", 6, 2.2, "-4 -2 +4 +8"],
	["77", 192.22, "Ir", "Iridium", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7", 6, 2.2, "-3 -1 +3 +4 +9"],
	["78", 195.08, "Pt", "Platinum", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d9", 6, 2.28, "-3 +2 +4 +6"],
	["79", 196.966, "Au", "Gold", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1 4f14 5d10", 6, 2.54, "-3 +3 +5"],
	["80", 200.59, "Hg", "Mercury", "Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10", 6, 2, "-2 +1 +2"],
	["81", 204.383, "Tl", "Thallium", "Post-Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1", 6, 1.62, "-5 -2 +1 +3"],
	["82", 207, "Pb", "Lead", "Post-Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2", 6, 2.33, "-4 -2 +2 +4"],
	["83", 208.98, "Bi", "Bismuth", "Post-Transition Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3", 6, 2.02, "-3 +3 +5"],
	["84", 208.982, "Po", "Polonium&#9762;", "Metalloid", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4", 6, 2, "-2 +2 +4 +6"],
	["85", 209.987, "At", "Astatine&#9762;", "Halogen", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5", 6, 2.2, "-1 +1 +3 +5 +7"],
	["86", 222.017, "Rn", "Radon&#9762;", "Noble Gas", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6", 6, undefined, "+2 +6"],
	["87", 223.019, "Fr", "Francium&#9762;", "Alkali Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1", 7, 0.7, "+1"],
	["88", 226.025, "Ra", "Radium&#9762;", "Alkali Earth Metal", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2", 7, 0.89, "+2"],
	["89", 227.027, "Ac", "Actinium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1", 9, 1.1, "+2"],
	["90", 232.038, "Th", "Thorium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2", 9, 1.3, "+2 +4"],
	["91", 231.035, "Pa", "Protactinium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1 5f2", 9, 1.5, "+2 +5"],
	["92", 238.028, "U", "Uranium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1 5f3", 9, 1.38, "+2 +4 +6"],
	["93", 237.048, "Np", "Neptunium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1 5f4", 9, 1.36, "+2 +5 +7"],
	["94", 244.064, "Pu", "Plutonium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6", 9, 1.28, "+2 +4 +8"],
	["95", 243.061, "Am", "Americium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7", 9, 1.3, "+2 +3 +8"],
	["96", 247.07, "Cm", "Curium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1", 9, 1.3, "+2 +3 +6"],
	["97", 247.07, "Bk", "Berkelium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9", 9, 1.3, "+2 +3 +4"],
	["98", 251.079, "Cf", "Californium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10", 9, 1.3, "+2 +3 +4"],
	["99", 252.083, "Es", "Einsteinium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11", 9, 1.3, "+2 +3 +4"],
	["100", 257.095, "Fm", "Fermium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12", 9, 1.3, "+2 +3"],
	["101", 258.098, "Md", "Mendelevium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13", 9, 1.3, "+2 +3"],
	["102", 259.101, "No", "Nobelium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14", 9, 1.3, "+2 +3"],
	["103", 266.12, "Lr", "Lawrencium&#9762;", "Actinide", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d1", 9],
	["104", 267.122, "Rf", "Rutherfordium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2", 7],
	["105", 268.126, "Db", "Dubnium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3", 7],
	["106", "269.128", "Sg", "Seaborgium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4", 7],
	["107", 270.133, "Bh", "Bohrium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5", 7],
	["108", 269.133, "Hs", "Hassium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6", 7],
	["109", 277.154, "Mt", "Meitnerium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7", "7"],
	["110", 282.166, "Ds", "Darmstadtium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8", "7"],
	["111", 282.169, "Rg", "Roentgenium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d9", "7"],
	["112", 286.179, "Cn", "Copernicium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10", "7"],
	["113", 286.182, "Nh", "Nihonium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1", "7"],
	["114", 290.192, "Fl", "Flerovium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2", "7"],
	["115", 290.196, "Mc", "Moscovium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3", "7"],
	["116", 293.205, "Lv", "Livermorium&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4", "7"],
	["117", 294.211, "Ts", "Tennessine&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5", "7"],
	["118", 295.216, "Og", "Oganesson&#9762;", "Superheavy", "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6", "7"]
];
	
let radioactiveElements = [
	43,
	61,
	84,
	85,
	86,
	87,
	88,
	89,
	90,
	91,
	92,
	93,
	94,
	95,
	96,
	97,
	98,
	99,
	100,
	101,
	102,
	103,
	104,
	105,
	106,
	107,
	108,
	109,
	110,
	111,
	112,
	113,
	114,
	115,
	116,
	117,
	118
];

let shrinkMap = {
	"Noble Gas": "nob",
	"Alkali Metal": "alk",
	"Alkali Earth Metal": "ake",
	"Metalloid": "mlo",
	"Nonmetal": "nmt",
	"Post-Transition Metal": "ptm",
	"Halogen": "hlg",
	"Transition Metal": "trm",
	"Lanthanide": "lan",
	"Actinide": "act",
	"Superheavy": "sup"
};

let backgroundColors = {
	"nob": "#9999FF",
	"alk": "#FF6666",
	"ake": "#FF9999",
	"mlo": "#22AA22",
	"nmt": "#44CC44",
	"ptm": "#FF8800",
	"hlg": "#FFFF99",
	"trm": "#777777",
	"lan": "#FF77FF",
	"act": "#8851CF",
	"sup": "#FFFFFF"
}

function numberToGroup(x) {
	return {
		"1": 1,
		"3": 1,
		"11": 1,
		"19": 1,
		"37": 1,
		"55": 1,
		"87": 1,
		"4": 2,
		"12": 2,
		"20": 2,
		"38": 2,
		"56": 2,
		"88": 2,
		"21": 3,
		"39": 3,
		"22": 4,
		"40": 4,
		"72": 4,
		"104": 4,
		"57": 3,
		"89": 3,
		"23": 5,
		"41": 5,
		"73": 5,
		"105": 5,
		"58": 4,
		"90": 4,
		"24": 6,
		"42": 6,
		"74": 6,
		"106": 6,
		"59": 5,
		"91": 5,
		"25": 7,
		"43": 7,
		"75": 7,
		"107": 7,
		"60": 6,
		"92": 6,
		"26": 8,
		"44": 8,
		"76": 8,
		"108": 8,
		"61": 7,
		"93": 7,
		"27": 9,
		"45": 9,
		"77": 9,
		"109": 9,
		"62": 8,
		"94": 8,
		"28": 10,
		"46": 10,
		"78": 10,
		"110": 10,
		"63": 9,
		"95": 9,
		"29": 11,
		"47": 11,
		"79": 11,
		"111": 11,
		"64": 10,
		"96": 10,
		"30": 12,
		"48": 12,
		"80": 12,
		"112": 12,
		"65": 11,
		"97": 11,
		"5": 13,
		"13": 13,
		"31": 13,
		"49": 13,
		"81": 13,
		"113": 13,
		"66": 12,
		"98": 12,
		"6": 14,
		"14": 14,
		"32": 14,
		"50": 14,
		"82": 14,
		"114": 14,
		"67": 13,
		"99": 13,
		"7": 15,
		"15": 15,
		"33": 15,
		"51": 15,
		"83": 15,
		"115": 15,
		"68": 14,
		"100": 14,
		"8": 16,
		"16": 16,
		"34": 16,
		"52": 16,
		"84": 16,
		"116": 16,
		"69": 15,
		"101": 15,
		"9": 17,
		"17": 17,
		"35": 17,
		"53": 17,
		"85": 17,
		"117": 17,
		"70": 16,
		"102": 16,
		"2": 18,
		"10": 18,
		"18": 18,
		"36": 18,
		"54": 18,
		"86": 18,
		"118": 18,
		"71": 17,
		"103": 17
	}[x+[]];
}
