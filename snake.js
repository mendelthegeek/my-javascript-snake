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
			"y": 4
		},
		"tail": {
			"x": 0,
			"y": 0
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
