var upWindow = function(json){
	var wind = Titanium.UI.createWindow();
	wind.add(parsing(json,'second'));

	return wind;
};