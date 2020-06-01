function startNew(){
	reset();

	addFood();

	setTimeout(tick,500);
}

function gameOver() {
	alert( 'game over' );
	startNew();
}

var pizza = 0;

function tick() {
//console.log( pos.tail.x + " - " + pos.tail.y );

	if ( !moveHead() ) {
		return
	}

	if ( board[pos.head.x][pos.head.y] != 2 ) {
		moveTail();
	}  else {
		addFood();
	}

	board[pos.head.x][pos.head.y] = 1;

//console.log(dir.head);

//console.log(pos);

	render();

	setTimeout(tick,200);
}

//console.log(dir.head);

var width = 500, height = 500;
var cellWidth =  width / 25, cellheight = height / 25;
//var hideBoard = false;

function drawBlock( x, y, ctx ) {
	ctx.fillRect( cellWidth * x, cellheight * y, cellWidth -1 , cellheight -1 );
}

function render() {
	var canvas = document.getElementById( 'game' );
	var ctx = canvas.getContext( '2d' );

	ctx.fillStyle = "white";
	ctx.fillRect( 0, 0, width, height );

	//if (hideBoard) { return; }

	for ( var x = 0; x < 25; ++x ) {
		for ( var y = 0; y < 25; ++y ) {
			if ( board[ y ][ x ] ) {
				ctx.fillStyle = colors[ board[y][x] - 1];
				drawBlock( x, y, ctx );
			}
		}
	}
}

var colors = ["red","blue"];

function addFood() {

	var coords = generateCoords();

	board[coords.x][coords.y] = 2;

	function generateCoords() {
		var x,y;
		x = produceRandom(25);
		y = produceRandom(25);

		return board[x][y]? generateCoords(): {"x":x,"y":y};
	}
}

function produceRandom(foo, bar) {
	var rand = Math.floor( Math.random() * foo );
	return bar?rand+bar:rand;
}













