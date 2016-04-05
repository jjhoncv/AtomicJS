import Molecule from "../../core/Molecule.js";
import atomButton from "../../atoms/fields/button/atomButton.js";
import $ from "jquery";

class moleculeMenu extends Molecule {
	constructor(componentId) {
		super(componentId);
		this.init();
	}

	catchDom(){
		this.moleculeMenu = this.getElement('.molecule-menu');
		this.overButton1 = new atomButton("overButton1");
		this.overButton2 = new atomButton("overButton2");
	}

	suscribeEvents(){			
		//this.suscribe("isAllOverButton", this.fn().isAllOver);
		this.overButton1.addActionListener("mouseover", this.events.overButton);
		this.overButton2.addActionListener("mouseover", this.events.overButton);
	}
	
	get events(){
		return{
			overButton:(e)=> {
				this.target.hover = true;
				this.dispatchAction("hover", e);
				this.fn.isAllOver();
			}
		}
	}

	get fn(){
		return{
			isAllOver: ()=>{
				//if(this.overButton1)
				this.dispatchAction("isAllOverButton", {yo:this});
			}
		}
	}

	init(){
		this.catchDom();
		this.suscribeEvents();		
	}

}

export default moleculeMenu;