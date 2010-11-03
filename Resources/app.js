var tabGroup = Titanium.UI.createTabGroup();
var win1 = Titanium.UI.createWindow({url:'input.js',title:'By @pecdev'});
var tab1 = Titanium.UI.createTab({  icon:'KS_nav_views.png',title:'URL',window:win1});
var win2 = Titanium.UI.createWindow({url:'input2.js',title:'By @pecdev'});
var tab2 = Titanium.UI.createTab({  icon:'KS_nav_views.png',title:'Free Write',window:win2});

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.open();


