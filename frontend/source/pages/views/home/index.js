import atomButton from "../../../atoms/fields/button/atomButton.js";

import moleculeMenu from "../../../molecules/menu/moleculeMenu.js";

var button = new atomButton("myButton");

button.suscribe("FncHola", function(){
	alert("soy FncHola");
});

button.suscribe("click", function(){
	button.trigger("FncHola");
});

//button.trigger("click");

/*button.on("click", function(){
	button.trigger("FncHola");
});*/


var moleculemenu = new moleculeMenu("menu");