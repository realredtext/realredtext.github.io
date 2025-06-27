const onmouseswipe = (elmnt, mouseover, mouseleave) => {
    elmnt.onmouseover = mouseover;
    elmnt.onmouseleave = mouseleave;
};

let members = [...document.querySelectorAll(".member")];

members.forEach((member) => {
	onmouseswipe(member, () => {
		member.children[0].src = "./folder_open.png";
	}, () => {
		member.children[0].src = "./folder.png";
	});
});