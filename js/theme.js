function getSystemTheme() {
	return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

function getCurrentTheme() {
	return localStorage.getItem('theme') || getSystemTheme();
}

function updatePositionToTheme() {
	let theme = getCurrentTheme();
	let allElements = document.querySelectorAll('*');
	allElements.forEach(element => {
		element.style.colorScheme = theme;
	});
	
	let themeSelector = document.getElementById('themeSelector');
	themeSelector.style.transform = (theme == 'dark') ? 'translateX(0px)' : 'translateX(50px)';
}

function switchTheme() {
	localStorage.setItem('theme', (getCurrentTheme() == 'dark') ? 'light' : 'dark');
	updatePositionToTheme();
}
updatePositionToTheme();

const themeBox = document.getElementsByClassName('themeBox')[0];
themeBox.style.visibility = 'visible';