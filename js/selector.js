function createSidebarContent(prefix) {
	// Create elements
	if(prefix == null) prefix = '';
	const sidebarNav = document.getElementsByClassName('sidebar')[0];
	sidebarNav.style.visibility = 'visible';

	const searchInput = document.createElement('input');
	searchInput.type = 'text';
	searchInput.id = 'searchInput';
	searchInput.placeholder = 'Search..';

	const selectablesDiv = document.createElement('div');
	selectablesDiv.className = 'selectables';

	const itemList = document.createElement('ul');
	itemList.className = 'searchbar-child';
	itemList.id = 'itemList';

	// List items
	const items = {
		// Reflection
		'getProperty': 'reflection.html',
		'getPropertyFromGroup': 'reflection.html',
		'getPropertyFromClass': 'reflection.html',
		'setProperty': 'reflection.html',
		'setPropertyFromGroup': 'reflection.html',
		'setPropertyFromClass': 'reflection.html',
		'callMethod': 'reflection.html',
		'callMethodFromClass': 'reflection.html',
		'instanceArg': 'reflection.html',
		'createInstance': 'reflection.html',
		'addInstance': 'reflection.html',

		// Text
		'makeLuaText': 'text.html',
		'addLuaText': 'text.html',
		'removeLuaText': 'text.html',
		'setTextString': 'text.html',
		'setTextSize': 'text.html',
		'setTextWidth': 'text.html',
		'setTextHeight': 'text.html',
		'setTextAutoSize': 'text.html',
		'setTextBorder': 'text.html',
		'setTextColor': 'text.html',
		'setTextFont': 'text.html',
		'instanceArg': 'text.html',
		'setTextItalic': 'text.html',
		'setTextAlignment': 'text.html',
		'getTextString': 'text.html',
		'getTextSize': 'text.html',
		'getTextFont': 'text.html',
		'getTextWidth': 'text.html',

		// Camera
		'setCameraScroll': 'camera.html',
		'setCameraFollowPoint': 'camera.html',
		'addCameraScroll': 'camera.html',
		'addCameraFollowPoint': 'camera.html',
		'getCameraScrollX': 'camera.html',
		'getCameraScrollY': 'camera.html',
		'getCameraFollowX': 'camera.html',
		'getCameraFollowY': 'camera.html',
		'cameraShake': 'camera.html',
		'cameraFlash': 'camera.html',
		'cameraFade': 'camera.html',

		// Timer
		'runTimer': 'timer.html',
		'cancelTimer': 'timer.html',

		// Substate
		'openCustomSubstate': 'substate.html',
		'closeCustomSubstate': 'substate.html',
		'insertToCustomSubstate': 'substate.html',
		
		// Discord
		'changeDiscordPresence': 'discord.html',
		'changeDiscordClientID': 'discord.html',

		// Achievements
		'getAchievementScore': 'achievements.html',
		'setAchievementScore': 'achievements.html',
		'addAchievementScore': 'achievements.html',
		'unlockAchievement': 'achievements.html',
		'isAchievementUnlocked': 'achievements.html',
		'achievementExists': 'achievements.html',

		// Translations
		'getTranslationPhrase': 'translations.html',
		'getFileTranslation': 'translations.html',

		// Precache
		'precacheImage': 'precache.html',
		'precacheSound': 'precache.html',
		'precacheMusic': 'precache.html',
		'addCharacterToList': 'precache.html'
	};

	// Create list elements and append to itemList
	let num = 0;
	for (let item in items)
	{
		const link = document.createElement('a');
		link.href = prefix + items[item] + "#" + item;
		link.className = 'selectable-link';

		const listItem = document.createElement('li');
		listItem.textContent = item;
		listItem.className = 'searchbar-child';
		link.appendChild(listItem);
		itemList.appendChild(link);
		num++;
	}
	console.log('Found ' + num + ' functions');

	// Append elements to their parents
	selectablesDiv.appendChild(itemList);
	sidebarNav.appendChild(searchInput);
	sidebarNav.appendChild(selectablesDiv);
}