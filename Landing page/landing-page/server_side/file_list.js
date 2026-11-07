function linkButton(icon_path, name) {
	return `<div class="link-button"><div class="icon-box"><img src="${icon_path}"></img></div><span class="link-box-text">${name}</span></div>`
}

function content() {
	let internalContent = "";
	internalContent += linkButton("/images/folder.svg", "File List");
	internalContent += linkButton("/images/document.svg", "Articles");
	internalContent += linkButton("/images/click.svg", "Interactives");
	const returnedContent = `<article>${internalContent}</article>`;
	return returnedContent
}

module.exports =  { content };