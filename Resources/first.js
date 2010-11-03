var firstView = function(first,type){
	var win = Ti.UI.createWindow({backgroundColor:'#CCC'});
	if(type == 'url'){
		xhr = Ti.Network.createHTTPClient();
		xhr.onerror=function(e){
			alert('File Not Found');
		};
		xhr.open('GET', first);
		xhr.onload = function () {
			win.add(parsing(this.responseText,'first'));
		};
		xhr.send();
	}
	if(type == 'text'){
		win.add(parsing(first,'first'));
	}
	return win;
};
