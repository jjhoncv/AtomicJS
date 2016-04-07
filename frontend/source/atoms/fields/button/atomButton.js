import Atom from "../../../core/Atom.js";
import $ from "jquery";

class atomButton extends Atom {
	constructor(componentId) {
		super(componentId);
		this.init();		
	}

	catchDom(){
		this.button = $(this.getElement('.atom-button'));
	}

	subscribeEvents() {
		
	}

	get events() {
		return {			
			handleClick : (e) => {
				this.dispatchAction('clickButton');
			}			
		}
	}

	init(){
		this.catchDom();
		this.subscribeEvents();
	}

}

export default atomButton;