var pos, dir, board;
var corner = [];
var snakeLength = 5;
var directions = {
	'left': [ "y", -1 ],
	'up': [ "x", -1 ],
	'right': [ "y", 1 ],
	'down': [ "x", 1 ]
}
var justTurned = false;

function reset() {

		/* ******* */

	board = [];

	for ( var i = 0; i < 25; i++ ) {
		board[i] = [];
		for ( var j = 0; j < 25; j++ ) {
			board[i][j] = 0;
		}
	}

		/* ******* */

	pos = new Object();
	
		pos.head = {
			"x": produceRandom(),
			"y": produceRandom()
		};
		
		pos.tail = {
			"x": pos.head.x,
			"y": pos.head.y - snakeLength
		}
	
	function produceRandom() {
		return Math.floor( Math.random() * 5 ) + 10;
	}

		/* ******* */

	dir = {
		"head": {
			"plusMinus": 1,
			"axis": "y"
		},
		"tail": {
			"plusMinus": 1,
			"axis": "y"
		}
	};

	//corner = [ new Corner() ];
	
		/* ******* */
			
	var x = pos.head.x;
	var y = pos.tail.y;

	do {
		board[x][++y] = 1;
	} while ( y <= pos.head.y );

}
	
//console.log(dir.head);

function Corner() {
	this.x = pos.head.x;
	this.y = pos.head.y;
	this.dir = JSON.parse(JSON.stringify(dir.head));
}

//console.log(dir.head);

function moveHead() {
	
	pos.head[dir.head.axis] += dir.head.plusMinus;
	
	justTurned = false;
}

function moveTail() {
	
	pos.tail[dir.tail.axis] += dir.tail.plusMinus;
	
	if ( corner[0] && corner[0].x == pos.tail.x && corner[0].y == pos.tail.y ) {
		dir.tail = JSON.parse(JSON.stringify(corner[0].dir));
		
		corner.splice( 0, 1 );
	}
	console.log(pos.head.x + "," + pos.head.y + '\n' + pos.tail.x + "," + pos.tail.y);
	for ( i in corner ){
		console.log( corner[i].x + "," + corner[i].y + '\n');
	}
}

function turnSnake( direction ) {

	if ( dir.head.axis != directions[ direction ][0] && !justTurned ) {
		dir.head.axis = directions[ direction ][0];
		dir.head.plusMinus = directions[ direction ][1];
		
		justTurned = true;
	corner.push( new Corner());
	}
	
}