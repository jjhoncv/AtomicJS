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
		this.btnAutosNuevos = new atomButton("btnAutosNuevos");
		this.myButton = this.getElement('.my-button');

	}

	suscribeEvents(){
		
		this.myButton.on("click", function(e){

		})


		//this.btnAutosNuevos.addActionListener("clickButton", this.events.clickButton);
		//this.btnAutosNuevos.addActionListener("mouseoutButton", this.events.outButton);

	}
	
	get events(){
		return{
			overButton: (e)=> {
				e.target.hover = true;
			},
			outButton: (e)=>{				
				e.target.hover = false;
			}
		}
	}

	get fn(){
		return{
			isAllOver: ()=> {
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