/*

name:- Kushan Joshi
id:- 300873962
date:- 17 Aug
rolling and putting image on canvas logic

*/


var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
	

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
	//creating content on canvas
	var ctx=canvas.getContext("2d");
    	var img1=document.getElementById("die1");
	img1.src = "Assets/images/1.png"
	

    	var img2=document.getElementById("die1");
	img2.src = "Assets/images/6.png"

	var bitmap1 = new createjs.Bitmap(img1);
	stage.addChild(bitmap1);
	var bitmap2 = new createjs.Bitmap(img2);
	stage.addChild(bitmap2);
	bitmap2.x = 200;	

        main();
    }
    function gameLoop() {
        stage.update();
    }

    function main() {
	console.log("---in main---");
	
	var ctx=canvas.getContext("2d");
    	var img1=document.getElementById("die1");

	

    	var img2=document.getElementById("die2");

	
	
	//click event on roll button	
	var roll = document.getElementById("roll");
	roll.addEventListener("click", function(e){
		var die1 = Math.floor((Math.random() * 6) + 1);
		console.log(die1);
		console.log(typeof die1);
		var die2 = Math.floor((Math.random() * 6) + 1);
		console.log(die2);
	for(var i = 0; i <=6 ; i++){		//roll logic
		if(die1 == i){
			console.log("die1 ==" + die1)
			img1.src = "Assets/images/"+die1+".png";
			console.log(img1.src)
		}
		if(die2 == i){
			console.log("die2 = " + die2)
						img2.src = "Assets/images/"+die2+".png";
			console.log(img2.src)
		}
	}
	//setting up images
	var bitmap1 = new createjs.Bitmap(img1);
	stage.addChild(bitmap1);
	var bitmap2 = new createjs.Bitmap(img2);
	stage.addChild(bitmap2);
	bitmap2.x = 200;	

	})
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map
