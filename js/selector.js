function createSidebarContent(prefix) {
	// Create elements
	if(prefix == null) prefix = '';
	const sidebarNav = document.getElementsByClassName('sidebar')[0];
	sidebarNav.style.visibility = 'visible';

	const searchInput = document.createElement('input');
	searchInput.type = 'text';
	searchInput.id = 'searchInput';
	searchInput.placeholder = 'Search for a Function...';

	const selectablesDiv = document.createElement('div');
	selectablesDiv.className = 'selectables';

	const itemList = document.createElement('ul');
	itemList.className = 'searchbar-child';
	itemList.id = 'itemList';

	// List items
	const items = {
		// PlayState
		'startCountdown': 'playstate.html',
		'endSong': 'playstate.html',
		'getSongPosition': 'playstate.html',
		'restartSong': 'playstate.html',
		'exitSong': 'playstate.html',
		'loadSong': 'playstate.html',
		'triggerEvent': 'playstate.html',
		'setHealthBarColors': 'playstate.html',
		'setTimeBarColors': 'playstate.html',
		'startDialogue': 'playstate.html',
		'startVideo': 'playstate.html',

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
		'getObjectOrder': 'reflection.html',
		'setObjectOrder': 'reflection.html',
		'addToGroup': 'reflection.html',
		'removeFromGroup': 'reflection.html',
		'setObjectCamera': 'reflection.html',
		'setScrollFactor': 'reflection.html',
		'screenCenter': 'reflection.html',
		'scaleObject': 'reflection.html',
		'setGraphicSize': 'reflection.html',
		'updateHitbox': 'reflection.html',
		'setBlendMode': 'reflection.html',
		'getMidpointX': 'reflection.html',
		'getMidpointY': 'reflection.html',
		'getGraphicMidpointX': 'reflection.html',
		'getGraphicMidpointY': 'reflection.html',
		'getScreenPositionX': 'reflection.html',
		'getScreenPositionY': 'reflection.html',
		'getPixelColor': 'reflection.html',
		'objectsOverlap': 'reflection.html',

		// Spritesheet
		'makeLuaSprite': 'spritesheet.html',
		'makeAnimatedLuaSprite': 'spritesheet.html',
		'makeGraphic': 'spritesheet.html',
		'loadGraphic': 'spritesheet.html',
		'loadFrames': 'spritesheet.html',
		'loadMultipleFrames': 'spritesheet.html',
		'addAnimationByPrefix': 'spritesheet.html',
		'addAnimationByIndices': 'spritesheet.html',
		'addAnimation': 'spritesheet.html',
		'addOffset': 'spritesheet.html',
		'playAnim': 'spritesheet.html',
		'addLuaSprite': 'spritesheet.html',
		'removeLuaSprite': 'spritesheet.html',
		'luaSpriteExists': 'spritesheet.html',

		// FlxAnimate
		'makeFlxAnimateSprite': 'flxanimate.html',
		'loadAnimateAtlas': 'flxanimate.html',
		'addAnimationBySymbol': 'flxanimate.html',
		'addAnimationBySymbolIndices': 'flxanimate.html',

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
		'setTextItalic': 'text.html',
		'setTextAlignment': 'text.html',
		'getTextString': 'text.html',
		'getTextSize': 'text.html',
		'getTextFont': 'text.html',
		'getTextWidth': 'text.html',
		'luaTextExists': 'text.html',

		// Sound
		'playSound': 'sound.html',
		'playMusic': 'sound.html',
		'soundFadeIn': 'sound.html',
		'soundFadeOut': 'sound.html',
		'soundFadeCancel': 'sound.html',
		'stopSound': 'sound.html',
		'pauseSound': 'sound.html',
		'resumeSound': 'sound.html',
		'getSoundVolume': 'sound.html',
		'setSoundVolume': 'sound.html',
		'getSoundTime': 'sound.html',
		'setSoundTime': 'sound.html',
		'getSoundPitch': 'sound.html',
		'setSoundPitch': 'sound.html',
		'luaSoundExists': 'sound.html',

		// Camera
		'setCameraScroll': 'camera.html',
		'setCameraFollowPoint': 'camera.html',
		'addCameraScroll': 'camera.html',
		'addCameraFollowPoint': 'camera.html',
		'getCameraScrollX': 'camera.html',
		'getCameraScrollY': 'camera.html',
		'getCameraFollowX': 'camera.html',
		'getCameraFollowY': 'camera.html',
		'cameraSetTarget': 'camera.html',
		'cameraShake': 'camera.html',
		'cameraFlash': 'camera.html',
		'cameraFade': 'camera.html',

		// Input
		'mouseClicked': 'input.html',
		'mousePressed': 'input.html',
		'mouseReleased': 'input.html',
		'getMouseX': 'input.html',
		'getMouseY': 'input.html',
		'keyJustPressed': 'input.html',
		'keyPressed': 'input.html',
		'keyReleased': 'input.html',
		'keyboardJustPressed': 'input.html',
		'keyboardPressed': 'input.html',
		'keyboardReleased': 'input.html',
		'anyGamepadJustPressed': 'input.html',
		'anyGamepadPressed': 'input.html',
		'anyGamepadReleased': 'input.html',
		'gamepadJustPressed': 'input.html',
		'gamepadPressed': 'input.html',
		'gamepadReleased': 'input.html',
		'gamepadAnalogX': 'input.html',
		'gamepadAnalogY': 'input.html',

		// Tween
		'startTween': 'tween.html',
		'doTweenX': 'tween.html',
		'doTweenY': 'tween.html',
		'doTweenAngle': 'tween.html',
		'doTweenAlpha': 'tween.html',
		'doTweenColor': 'tween.html',
		'doTweenZoom': 'tween.html',
		'noteTweenX': 'tween.html',
		'noteTweenY': 'tween.html',
		'noteTweenAngle': 'tween.html',
		'noteTweenAlpha': 'tween.html',
		'noteTweenDirection': 'tween.html',
		'cancelTween': 'tween.html',

		// Timer
		'runTimer': 'timer.html',
		'cancelTimer': 'timer.html',

		// Character
		'getCharacterX': 'character.html',
		'getCharacterY': 'character.html',
		'setCharacterX': 'character.html',
		'setCharacterY': 'character.html',
		'characterDance': 'character.html',

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
		'addCharacterToList': 'precache.html',

		// Score
		'addScore': 'score.html',
		'setScore': 'score.html',
		'addMisses': 'score.html',
		'setMisses': 'score.html',
		'addHits': 'score.html',
		'setHits': 'score.html',
		'getHealth': 'score.html',
		'addHealth': 'score.html',
		'setHealth': 'score.html',
		'setRatingPercent': 'score.html',
		'setRatingName': 'score.html',
		'setRatingFC': 'score.html',
		'updateScoreText': 'score.html',

		// Save Data
		'initSaveData': 'savedata.html',
		'flushSaveData': 'savedata.html',
		'eraseSaveData': 'savedata.html',
		'getDataFromSave': 'savedata.html',
		'setDataFromSave': 'savedata.html',

		// File I/O
		'getTextFromFile': 'file.html',
		'checkFileExists': 'file.html',
		'saveFile': 'file.html',
		'deleteFile': 'file.html',
		'directoryFileList': 'file.html',

		// Script
		'getRunningScripts': 'script.html',
		'callScript': 'script.html',
		'addLuaScript': 'script.html',
		'addHScript': 'script.html',
		'removeLuaScript': 'script.html',
		'removeHScript': 'script.html',
		'isRunning': 'script.html',
		'setVar': 'script.html',
		'getVar': 'script.html',
		'setOnScripts': 'script.html',
		'setOnLuas': 'script.html',
		'setOnHScript': 'script.html',
		'callOnScripts': 'script.html',
		'callOnHScript': 'script.html',
		'callOnLuas': 'script.html',
		'runHaxeCode': 'script.html',
		'runHaxeFunction': 'script.html',

		// Uncategorized
		'FlxColor': 'uncategorized.html',
		'getColorFromName': 'uncategorized.html',
		'getColorFromString': 'uncategorized.html',
		'getColorFromHex': 'uncategorized.html',
		'stringStartsWith': 'uncategorized.html',
		'stringEndsWith': 'uncategorized.html',
		'stringSplit': 'uncategorized.html',
		'stringTrim': 'uncategorized.html',
		'getRandomBool': 'uncategorized.html',
		'getRandomInt': 'uncategorized.html',
		'getRandomFloat': 'uncategorized.html',
		'debugPrint': 'uncategorized.html',
		'getModSetting': 'uncategorized.html'
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

	const collapsingArrow = document.createElement('i')
	collapsingArrow.classList.add('arrow')
	sidebarNav.append(collapsingArrow)

	collapsingArrow.addEventListener('click', function() {
		if (sidebarNav.getAttribute('collapsed') != 'true') {
			sidebarNav.setAttribute('collapsed', 'true')
		} else {
			sidebarNav.setAttribute('collapsed', 'false')
		}
	})

	sidebarNav.appendChild(selectablesDiv);
}