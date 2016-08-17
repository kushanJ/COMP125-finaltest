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



        main();
    }
    function gameLoop() {
        stage.update();
    }
    function main() {
	console.log("---in main---");
	
	var ctx=canvas.getContext("2d");
    	var img1=document.getElementById("die1");
	img1.src = "Assets/images/1.png"
	

    	var img2=document.getElementById("die1");
	img2.src = "Assets/images/6.png"
	
	
	
	var roll = document.getElementById("roll");
	roll.addEventListener("click", function(e){
		var die1 = Math.floor((Math.random() * 6) + 1);
		console.log(die1);
		console.log(typeof die1);
		var die2 = Math.floor((Math.random() * 6) + 1);
		console.log(die2);
	if(die1 == 1 || die2 == 1){
			img1.src = "Assets/images/1.png";
			img2.src = "Assets/images/1.png";
			
	}

	
	if(die1 == 1 || die2 == 1){
					img1.src = "Assets/images/1.png";
			img2.src = "Assets/images/1.png";
	}

		if(die1 == 2 || die2 == 2){
					img1.src = "Assets/images/2.png";
			img2.src = "Assets/images/2.png";
	}

	if(die1 == 3 || die2 == 3){
					img1.src = "Assets/images/3.png";
			img2.src = "Assets/images/3.png";
	}

	if(die1 == 4 || die2 == 4){
					img1.src = "Assets/images/4.png";
			img2.src = "Assets/images/4.png";
	}

	if(die1 == 5 || die2 == 5){
					img1.src = "Assets/images/5.png";
			img2.src = "Assets/images/5.png";
	}

	if(die1 == 6 || die2 == 6){
					img1.src = "Assets/images/6.png";
			img2.src = "Assets/images/6.png";
	}

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
