Ti.include('up.js');
Ti.include('first.js');
Ti.include('webview.js');
var win = Ti.UI.currentWindow;
win.backgroundColor='#CCC';
var inputView = Ti.UI.createTextField({width:300,height:75,top:15,backgroundColor:'white',borderColor:'#999',borderRadius:10});
var input = Ti.UI.createTextArea({value:'http://developer.appcelerator.com/apidoc/mobile/1.4/api.json',left:10,right:10,top:10,bottom:10,height:75,font:{fontSize:16}});
var button = Ti.UI.createButton({top:100,width:100,height:40,title:'Parse Json'});
var me = Ti.UI.createLabel({text:'follow me on twitter: @pecdev',top:150,width:'auto',height:'auto'});
inputView.add(input);
win.add(inputView);
win.add(button);
win.add(me);

button.addEventListener('click',function(){
	Ti.UI.currentTab.open(firstView(input.value));
});
me.addEventListener('click',function(){
	Titanium.Platform.openURL('http://twitter.com/pecdev');
});