import $ from "jquery";
import ActionListener from "./ActionListener.js";

class Component extends ActionListener {
	constructor(componentId) {
		super();
		this.componentId = componentId;
		this.target = document.querySelector('[data-cid="' + this.componentId + '"]');
	}
	
	getElement(ele){
		return $(this.target, ele)[0];
	}

}

export default Component;