let accentList = [];
for(var i = 768; i <= 791; i++) {
    accentList[i-768] = "a"+String.fromCharCode(i);
};

let accentIsCommon = {
    "300": !0,
    "301": !0,
    "302": !0,
    "303": !0,
    "304": !0,
    "305": !1,
    "306": !1,
    "307": !1,
    "308": !0, //weird
    "309": !1,
    "30a": !0,
    "30b": !1,
    "30c": !0,
    "30d": !1,
    "30e": !1,
    "30f": !1,
    "310": !1,
    "311": !1,
    "312": !1,
    "313": !1,
    "314": !1,
    "315": !1,
    "316": !1,
    "317": !1,
    "318": !1
}

function addAccentCard(content) {
    let card = document.createElement("button");
    card.className = "accent_card";
    card.innerText = content; //no html fuckery

    let hex = content[1].charCodeAt(0).toString(16);

    if(accentIsCommon[hex]) {
        common.appendChild(card);
    } else {
        rare.appendChild(card);
    }

};

for(var i of accentList) {
    addAccentCard(i);
}

document.addEventListener("click", (data) => {
    if((data.target instanceof HTMLButtonElement) && data.target.className === "accent_card") {
        copy(data.target.innerText[1]);
    }
});