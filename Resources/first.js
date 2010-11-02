var firstView = function(first){
	var win = Ti.UI.createWindow({backgroundColor:'#CCC'});
	xhr = Ti.Network.createHTTPClient();
	xhr.onerror=function(e){
		alert('File Not Found');
	};
	xhr.open('GET', first);

	xhr.onload = function () {
	 	try {
			var json = JSON.parse(this.responseText);
			if(!json){
				alert('error');
			};
			var array = [];
			var i = 0;
			for (key in json){
				var row = Ti.UI.createTableViewRow({title:key,content:json[key]});
				array[i] = row;
				i++;
			}
			var table = Ti.UI.createTableView({style:Titanium.UI.iPhone.TableViewStyle.GROUPED});
			table.data=array;
			win.add(table);
	
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
		}
		  catch(e){
			Ti.UI.createAlertDialog({title:'Error', message:'Probably Wrong Json'}).show();
         };
	};
	xhr.send();
	return win;
};
