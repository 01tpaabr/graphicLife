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


var basicRectanglePath = new Path.Rectangle(new Point(0,0), 19);
basicRectanglePath.fillColor = 'white';

var celulaVivaPath = new Path.Rectangle(new Point(0,0), 19);
celulaVivaPath.fillColor = 'green';

var zumbiPath = new Path.Rectangle(new Point(0,0), 19);
zumbiPath.fillColor = 'red';

var basicCirclePath = new Path.Circle(new Point(0,0), 3)
basicCirclePath.fillColor = 'grey';

var continueCirclePath = new Path.Circle(new Point(0,0), 3)
continueCirclePath.fillColor = 'white';

var stopCirclePath = new Path.Circle(new Point(0,0), 3)
stopCirclePath.fillColor = 'red';

var changeDirCirclePath = new Path.Circle(new Point(0,0), 3)
changeDirCirclePath.fillColor = 'blue';

var basicRect = new SymbolDefinition(basicRectanglePath);
var celulaViva = new SymbolDefinition(celulaVivaPath);
var zumbi = new SymbolDefinition(zumbiPath);
var basicCircle = new SymbolDefinition(basicCirclePath);
var continueCircle = new SymbolDefinition(continueCirclePath);
var stopCircle = new SymbolDefinition(stopCirclePath);
var changeDirCircle = new SymbolDefinition(changeDirCirclePath);

var lastKey = 'q';
var keysList = ['q', 'w', 'e', 'r'];
var symbolsList = [basicRect, celulaViva, zumbi, basicCircle, continueCircle, stopCircle, changeDirCircle];


//Grid
var centersList = [];
var gridList = [];
var n = 20

for (var i = 1; i <= n; i++) {
	var newColumn = []
	var newGridColumn = [];
	for(var j = 1; j <= n; j++){
		var newPoint = new Point(i * 20, j * 20);

		newColumn.push(newPoint);
		
		var instance = symbolsList[1].place();
		var instance2 = symbolsList[0].place();

		instance.position = newPoint;
		instance2.position = newPoint;

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
	
}

function onKeyDown(event) {
	
}