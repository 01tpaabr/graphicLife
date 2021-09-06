function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var viewX = view._viewSize._width;
var viewY = view._viewSize._height;

//To know where to realocate points
var oldViewCenter = view.center;

var resolution = 30;

var xDist = viewX/resolution;
var yDist = viewY/resolution;


//Operators
var basicCirclePath = new Path.Circle(new Point(0,0), 3)
basicCirclePath.fillColor = 'grey';

var continueCirclePath = new Path.Circle(new Point(0,0), 3)
continueCirclePath.fillColor = 'white';

var stopCirclePath = new Path.Circle(new Point(0,0), 3)
stopCirclePath.fillColor = 'red';

var changeDirCirclePath = new Path.Circle(new Point(0,0), 3)
changeDirCirclePath.fillColor = 'blue';

var basicCircle = new SymbolDefinition(basicCirclePath);
var continueCircle = new SymbolDefinition(continueCirclePath);
var stopCircle = new SymbolDefinition(stopCirclePath);
var changeDirCircle = new SymbolDefinition(changeDirCirclePath);

var lastKey = 'q';
var keysList = ['q', 'w', 'e', 'r'];
var symbolsList = [basicCircle, continueCircle, stopCircle, changeDirCircle];


//Grid
var centersList = [];
var gridList = [];

for (var i = 0; i <= resolution; i++) {
	var newColumn = []
	var newGridColumn = [];
	for(var j = 0; j <= resolution; j++){
		var newPoint = new Point(i * xDist, j * yDist);
		newColumn.push(newPoint);
		
		var instance = symbolsList[0].place();
		instance.position = newPoint;
		newGridColumn.push(instance);
		
	}
	centersList.push(newColumn);
	gridList.push(newGridColumn);
}

function onResize(event) {
	var diff = view.center - oldViewCenter;
	oldViewCenter = view.center;

	viewX = view._viewSize._width;
	viewX = view._viewSize._width;
}

//For animation
var lastTick = 0

function onFrame(event) {

}



function onMouseDown(event) {
	//Finding out where clicked inside grid
	var clickedX = Math.round(event.point.x / xDist)
	var clickedY = Math.round(event.point.y / yDist)
	
	if(clickedX > resolution) {
		clickedX = resolution
	}

	if(clickedY > resolution) {
		clickedY = resolution
	}

	var instance = symbolsList[keysList.indexOf(lastKey)].place();
	instance.position = centersList[clickedX][clickedY];
}

function onKeyDown(event) {
	if(event.key == 'q' || event.key == 'w' || event.key == 'e' || event.key == 'r'){
		lastKey = event.key;
	}
}