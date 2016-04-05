import Molecule from "../../core/Molecule.js";
import atomButton from "../../atoms/fields/button/atomButton.js";

class moleculeMenu extends Molecule {
	constructor(componentId) {
		super(componentId);
		this.init();
	}

	catchDom(){
		this.moleculeMenu = this.ele('.molecule-menu');
		this.addAtom(new atomButton("myButton1"));
		this.addAtom(new atomButton("myButton2"));
		this.addAtom(new atomButton("myButton3"));
	}

	suscribeEvents(){

		this.getAtom("myButton1").suscribe("mouseover",  ()=> {
			this.getAtom("myButton1").className = "hover";
		});	

		this.getAtom("myButton2").suscribe("mouseover", ()=> {
			this.getAtom("myButton2").className = "hover";
		});

		this.getAtom("myButton3").suscribe("mouseover", ()=> {
			this.getAtom("myButton3").className = "hover";
		});
		
	}

	init(){
		this.catchDom();		
		this.suscribeEvents();	
	}

}

export default moleculeMenu;