function removeClasses(array, className) {
	array.forEach(element => {
		element.classList.remove(className);
	});
}

function tabs() {
	const $tabs = document.querySelectorAll('.tabsParent');

	$tabs.forEach(element => {
		const $tabsItems = element.querySelectorAll('.tabsItem');
		const $tabsBlocks = element.querySelectorAll('.tabsBlock');

		for (let index = 0; index < $tabsItems.length; index += 1) {
			const tabItem = $tabsItems[index];
			tabItem.addEventListener('click', (e) => {
				removeClasses($tabsItems, 'activeState');
				removeClasses($tabsBlocks, 'activeState');

				tabItem.classList.add('activeState');
				$tabsBlocks[index].classList.add('activeState');
				e.preventDefault();
			});
		}
	});
}
export default tabs;
