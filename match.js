var memory_array = ['https://i.imgsafe.org/cbaf67be05.png','https://i.imgsafe.org/cbaf67be05.png','https://i.imgsafe.org/cbaf796668.png','https://i.imgsafe.org/cbaf796668.png','https://i.imgsafe.org/cbaf3a47a4.png','https://i.imgsafe.org/cbaf3a47a4.png','https://i.imgsafe.org/cbaf32400d.png','https://i.imgsafe.org/cbaf32400d.png','https://i.imgsafe.org/cbaf23ffe8.png','https://i.imgsafe.org/cbaf23ffe8.png','https://i.imgsafe.org/cbaf104f4c.png','https://i.imgsafe.org/cbaf104f4c.png','https://i.imgsafe.org/cbe5622344.jpg','https://i.imgsafe.org/cbe5622344.jpg','https://i.imgsafe.org/cbf15b1865.jpg','https://i.imgsafe.org/cbf15b1865.jpg','https://i.imgsafe.org/cbf1a4bea9.jpg','https://i.imgsafe.org/cbf1a4bea9.jpg','https://i.imgsafe.org/cbf1961f33.jpg','https://i.imgsafe.org/cbf1961f33.jpg','https://i.imgsafe.org/cbf1711577.jpg','https://i.imgsafe.org/cbf1711577.jpg','https://i.imgsafe.org/cbf1818298.jpg','https://i.imgsafe.org/cbf1818298.jpg','https://i.imgsafe.org/cc05b28eea.jpg','https://i.imgsafe.org/cc05b28eea.jpg','https://i.imgsafe.org/cc05940f23.jpg','https://i.imgsafe.org/cc05940f23.jpg','https://i.imgsafe.org/cc05a7f81d.jpg','https://i.imgsafe.org/cc05a7f81d.jpg','https://i.imgsafe.org/cc05beeb82.jpg','https://i.imgsafe.org/cc05beeb82.jpg'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML =  '<img src="' + val + '">';
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'blue';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'blue';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}