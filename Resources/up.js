var upWindow = function(parse){
	var wind = Titanium.UI.createWindow();
	var array = [];
	var i = 0;
	for (key in parse){
		var row = Ti.UI.createTableViewRow({title:key,content:parse[key]});
		array[i] = row;
		i++;
	}
	var table = Ti.UI.createTableView({style:Titanium.UI.iPhone.TableViewStyle.GROUPED,data:array});
	wind.add(table);
	table.addEventListener('click',function(e){
		if(e.rowData.content){
			var check = e.rowData.content.toString().substr(0,1);
			if(check == '{' || check == '[' || check == '('){
				Ti.UI.currentTab.open(upWindow(e.rowData.content));
			}else{
				if(e.rowData.content.toString()!=''){
					Ti.UI.currentTab.open(showInfo(e.rowData.content.toString()));
				}
			}
		}
	});

	return wind;
};