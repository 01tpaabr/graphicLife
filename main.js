var viewX = view._viewSize._width
var viewY = view._viewSize._height

//To know where to realocate points
var oldViewCenter = view.center

var resolution = 50

var xDist = viewX/resolution
var yDist = viewY/resolution

var circlesList = []
path = new Path()

for (var i = 0; i <= resolution; i++) {
	for(var j = 0; j <= resolution; j++){
		var newCircle = new Path.Circle(new Point(i * xDist, j * yDist), 0.8)
		newCircle.strokeColor = 'black';

		circlesList.push(newCircle)
	}
}


function onResize(event) {
	var diference = view.center - oldViewCenter
	oldViewCenter = view.center

	// Whenever the window is resized, realocate grid:
	for (var i = 0;  i < circlesList.length; i++) {
		circlesList[i].position += diference
	}

	viewX = view._viewSize._width
	viewX = view._viewSize._width
}