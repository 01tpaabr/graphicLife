var fr=new FileReader();
var result = ""

document.getElementById('inputfile').addEventListener('change', function() {			
	var fr=new FileReader();
	fr.onload=function(){
		result = fr.result;
	}
		
	fr.readAsText(this.files[0]);
})



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
basicRectanglePath.fillColor = 'grey';

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
		
		// var instance = symbolsList[1].place();
		var instance2 = symbolsList[0].place();
		var newPath = Path.Rectangle(newPoint, 19);
		
		// instance.position = newPoint;
		instance2.position = newPoint + (10, 10);

		newGridColumn.push(newPath);
		
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
var historico = []
var indiceMapa = 0
var tamanhoHistorico = 0
var lock = false
var collors = ['grey', 'green', 'red']

pattern = /\[(.*)\]/g
pattern2 = /\[(\[([0-9],?)+\],?)+\],?/g
pattern3 = /(\[([0-9],?)+\])/g

ultimoValor = 0

function onFrame(event) {
	if(result != "" && !lock){ 
		temp = result.split("\n")[1].split(pattern)[1].match(pattern2)
		
		
		for(var i = 0; i < temp.length; i++){
			var mapaAtual = []
			
			var atual = temp[i].match(pattern3);
			for(var j = 0; j < atual.length; j++){
				var nums = atual[j].slice(1, atual[j].length - 1).split(',');
				mapaAtual.push(nums)
			}
			historico.push(mapaAtual)
		}

		tamanhoHistorico = (historico.length) - 1
		lock = true
	}	

	if(Math.ceil(event.time) % 0.5 == 0){
		if(ultimoValor != Math.ceil(event.time)){
			ultimoValor = Math.ceil(event.time)

			
			
			if(historico.length !== 0){
				indiceMapa += 1
				indiceMapa = indiceMapa % tamanhoHistorico
				var mapaAtual = historico[indiceMapa];
				
				for (var i = 0; i < mapaAtual.length; i++) {
					for (var j = 0; j < mapaAtual.length; j++) {
						var valorCelulaAtual = parseInt(mapaAtual[i][j]);
						var selecionado = gridList[i][j];

						selecionado.fillColor = collors[valorCelulaAtual];
					}
				}
				
			}
		}
	}
}



function onMouseDown(event) {
	// //Finding out where clicked inside grid
	// var clickedX = Math.round(event.point.x / n) - 1
	// var clickedY = Math.round(event.point.y / n) - 1

	// // console.log(clickedX)
	// // console.log(clickedY)
	
	// if(clickedX > resolution) {
	// 	clickedX = resolution
	// }

	// if(clickedY > resolution) {
	// 	clickedY = resolution
	// }
}

function onKeyDown(event) {
	
}