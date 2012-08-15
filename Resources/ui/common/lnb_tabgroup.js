//search, history, account

function LnbTabGroup(windowNames) {
	var self = Ti.UI.createTabGroup();
	
	windowNames.forEach(function(name) {
		
		//Navigation controlieris prot pierequirot īsto logus, kas ir moduļos pēc nosaukuma
		var win = navigationController.newTabWindow(name);
		var tab = Ti.UI.createTab({
			title: t(name),
			icon: '/images/tab_icons/' + name + '.png',
			id: name,
			window: win
		});
		
		//Būtisks moments , jo tabs ver vaļā childWindow
		win.containingTab = tab;
		self.addTab(tab);
	});
	
	navigationController.currentWindow = self.getTabs()[0].getWindow();
	navigationController.tabGroup = self;
	
	return self;
};

module.exports = LnbTabGroup;
