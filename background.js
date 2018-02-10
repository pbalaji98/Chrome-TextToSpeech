
function init_background() {
	chrome.browserAction.onClicked.addListener(
		function(tab) {
			chrome.tts.speak('Hello');
		}
	);
}

init_background();

