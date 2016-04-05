import Atom from "../../../core/Atom.js";

class atomButton extends Atom {
	constructor(componentId) {
		super(componentId);
		this.init();
	}

	catchDom(){
		this.button = this.ele('.atom-button');
	}

	init(){
		this.catchDom();
	}

}

export default atomButton;