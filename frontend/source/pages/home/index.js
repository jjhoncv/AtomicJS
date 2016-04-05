import atomButton from "../../atoms/fields/button/atomButton.js";

import moleculeMenu from "../../molecules/menu/moleculeMenu.js";

var button = new atomButton("myButton");

button.addActionListener("click", function(e){
	alert("soy FncHola 0");
});

button.addActionListener("click", function(e){
	alert("soy FncHola");
});

button.addActionListener("click", function(e){
	e.preventDefault();
	alert("soy FncHola 2");
});

//button.trigger("click");

/*button.on("click", function(){
	button.trigger("FncHola");
});*/




var moleculemenu = new moleculeMenu("menu");
moleculemenu.addActionListener("isAllOverButton", function(e){
	console.log("e", e);
})
