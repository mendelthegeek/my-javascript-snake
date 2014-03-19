var temp = 0;

function startNew(){
	reset();
	
	ic = 0;
	pi = 0;

	do {
		board[ic][pi++] = 1;
	} while ( pi <= pos.head.y );

	setTimeout(tick,500);
}
	
var pizza = 0;

function tick() {
//console.log( pos.tail.x + " - " + pos.tail.y );	

	moveHead();
	
	board[pos.head.x][pos.head.y] = 1;
	
	moveTail();
	
	board[pos.tail.x][pos.tail.y] = 0;
	
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
	var canvas = document.getElementById( 'snake' );
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