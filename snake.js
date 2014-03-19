var pos, dir, board, corner;

function reset() {
	board = [];

	for ( var i = 0; i < 25; i++ ) {
		board[i] = [];
		for ( var j = 0; j < 25; j++ ) {
			board[i][j] = 0;
		}
	}

	pos = {
		"head": {
			"x": 0,
			"y": 3
		},
		"tail": {
			"x": 0,
			"y": -2
		}
	};

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

	corner = [ new Corner() ];
}
	
//console.log(dir.head);

function Corner() {
	this.x = pos.head.x;
	this.y = pos.head.y;
	this.dir = JSON.parse(JSON.stringify(dir.head));
}

//console.log(dir.head);

function moveHead() {
	
	pizza++;
	
	if ( pizza % 5 == 0 ) {
		turnSnake();
	}
	
	pos.head[dir.head.axis] += dir.head.plusMinus;
	
}

function moveTail() {
	
	pos.tail[dir.tail.axis] += dir.tail.plusMinus;
	
	if ( corner[temp] && corner[temp].x == pos.tail.x && corner[temp].y == pos.tail.y ) {
		dir.tail = JSON.parse(JSON.stringify(corner[temp].dir));
		temp++;
	}
	
}

function turnSnake() {

	dir.head.axis = dir.head.axis == "x"? "y" : "x";
	corner.push( new Corner());
	
}