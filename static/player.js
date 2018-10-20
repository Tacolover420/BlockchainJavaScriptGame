final var radius = 5;


function Hand() {
	var fireRate = 1;
	var damage = 5;
}
// Katana, Claymore, Mace, Flail, polearm, fatman, 

exports.Player = function (xPos, yPos, name, id){
	this.x = xPos;	
	this.y = yPos;
	this.Name = name;
	this.weapon = [];
	this.alive = true;
	this.degree = 0; // Used for player direction.
	this.id = id;
	this.payPal;
}

// Add other functions for usability.