function getSelectedText() {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection().toString();
	}

	return text;
}

function init_background() {
	chrome.browserAction.onClicked.addListener(
		function(tab) {
			chrome.tts.speak(getSelectedText());
		}
	);
}

init_background();

