function createSidebarContent(prefix) {
	// Create elements
	if(prefix == null) prefix = '';
	const sidebarNav = document.getElementsByClassName('sidebar')[0];

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
		
		'changeDiscordPresence': 'discord.html',
		'changeDiscordClientID': 'discord.html'
	};

	// Create list elements and append to itemList
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
	}

	// Append elements to their parents
	selectablesDiv.appendChild(itemList);
	sidebarNav.appendChild(searchInput);
	sidebarNav.appendChild(selectablesDiv);
}