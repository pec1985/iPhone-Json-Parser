var tabGroup = Titanium.UI.createTabGroup();
var win = Titanium.UI.createWindow({url:'input.js',title:'By pec1985'});
var tab1 = Titanium.UI.createTab({  icon:'KS_nav_views.png',title:'Tab 1',window:win});

tabGroup.addTab(tab1);  
tabGroup.open();


