import $ from "jquery";
import {ActionDispatcher} from "atomic-core";

class Component extends ActionDispatcher {
	constructor(componentId) {
		super();
		this.componentId = componentId;
		this.target = $('[data-cid="' + this.componentId + '"]');		
	}
	
	getElement(ele){		
		return $(ele, this.target)[0];
	}

	/*get hover(){
		return this._hover;
	}

	set hover(value) {
		this._hover = value;

		if(this._hover)
			this.$ele.attr("data-state", "hover");
		else{
			this.$ele.attr("data-state", this.$ele.attr("data-state").replace(/hover/g,""));
		}
	}*/

}

export default Component;