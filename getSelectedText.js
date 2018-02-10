function getSelectedText() {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection().toString();
	}

	return text;
}