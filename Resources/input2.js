Ti.include('up.js');
Ti.include('parse.js');
Ti.include('first.js');
Ti.include('webview.js');
var win = Ti.UI.currentWindow;
win.backgroundColor='#CCC';
var inputView = Ti.UI.createTextField({width:320,height:200,top:0,backgroundColor:'white'});
var input = Ti.UI.createTextArea({value:'{"sample":[{"one":"this is one"},{"two":"this is two"}]}',left:5,right:5,top:5,bottom:5,height:190,font:{fontSize:16},suppressReturn:false});
var button = Ti.UI.createButton({title:'Parse Json'});
win.rightNavButton=button;
inputView.add(input);
win.add(inputView);

button.addEventListener('click',function(){
	Ti.UI.currentTab.open(firstView(input.value,'text'));
});
