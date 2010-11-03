var parsing = function(text,type){
	if(type == 'first'){
		try{
			var json = JSON.parse(text);
			if(!json){	alert('error');	};
		}
		catch(e){
			Ti.UI.createAlertDialog({title:'Error', message:'Probably Wrong Json'}).show();
	   	};
			
	}
	if(type == 'second'){
		var json = text;
	}
	var array = [];
	var i = 0;
	for (key in json){
		var row = Ti.UI.createTableViewRow({title:key,content:json[key]});
		array[i] = row;
		i++;
	}
	var table = Ti.UI.createTableView({style:Titanium.UI.iPhone.TableViewStyle.GROUPED});
	table.data=array;
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
	return table;
};