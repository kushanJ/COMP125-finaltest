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
	var roll = document.getElementById("roll");
	roll.addEventListener("click", function(e){
		var die1 = Math.floor((Math.random() * 6) + 1);
		console.log(die1);

		var die2 = Math.floor((Math.random() * 6) + 1);
		console.log(die2);
		var total = die1 + die2;
		console.log(total)
	})
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map
