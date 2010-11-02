var showInfo = function(inf){
	var infoWin = Ti.UI.createWindow(); 
	var infoView = Ti.UI.createView({backgroundColor:'white'});
	var infoScroll = Titanium.UI.createScrollView({contentWidth:'auto',contentHeight:'auto',bottom:0,top:0});
	var html = '<body>';
	html = html+inf;
	html = html+'</body>';
	var infoWebView = Ti.UI.createWebView({touchEnabled:false,height:'auto',width:300,html:html});
	infoWebView.autoDetect = [];
	infoScroll.add(infoWebView);
	infoView.add(infoScroll);
	infoWin.add(infoView);
	return infoWin;
};