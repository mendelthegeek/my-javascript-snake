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

		//clear board
	board = [];
	corner = [];
		//new (empty) board
	for ( var i = 0; i < 25; i++ ) {
		board[i] = [];
		for ( var j = 0; j < 25; j++ ) {
			board[i][j] = 0;
		}
	}

		/* ******* */

	pos = {
		"head": {
			"x": produceRandom(10,5),
			"y": produceRandom(10,5)
		}
	};
		pos.tail = {
			"x": pos.head.x,
			"y": pos.head.y - snakeLength
		}

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

		/* ******* */

	var x = pos.tail.x;
	var y = pos.tail.y;

	do {
		board[x][++y] = 1;
	} while ( y <= pos.head.y -1 );

}

//console.log(dir.head);

function Corner() {
	this.x = pos.head.x;
	this.y = pos.head.y;
	this.dir = JSON.parse(JSON.stringify(dir.head));
}

//console.log(dir.head);

function moveHead() {

	temp = JSON.parse(JSON.stringify( pos ) );

	temp.head[dir.head.axis] += dir.head.plusMinus;

	if ( board[temp.head.x][temp.head.y] == 1 ) {
		gameOver();
		return false;
	}

	pos.head[dir.head.axis] += dir.head.plusMinus;
	return true;
}

function moveTail() {

	pos.tail[dir.tail.axis] += dir.tail.plusMinus;

	if ( corner[0] && corner[0].x == pos.tail.x && corner[0].y == pos.tail.y ) {
		dir.tail = JSON.parse(JSON.stringify(corner[0].dir));

		corner.splice( 0, 1 );
	}

	justTurned = false;

/*console.log(pos.head.x + "," + pos.head.y + '\n' + pos.tail.x + "," + pos.tail.y);
for ( i in corner ){
console.log( corner[i].x + "," + corner[i].y + '\n');
}*/

	board[pos.tail.x][pos.tail.y] = 0;

}

function turnSnake( direction ) {

	if ( dir.head.axis != directions[ direction ][0] && !justTurned ) {
		dir.head.axis = directions[ direction ][0];
		dir.head.plusMinus = directions[ direction ][1];

		justTurned = true;
	corner.push( new Corner());
	}

}
