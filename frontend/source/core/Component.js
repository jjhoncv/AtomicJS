import $ from "jquery";
import ActionListener from "./ActionListener.js";

function addAttr(ele, attr, value){
	var attr = ele.attr(attr);
	attrs = attr.join("");
	
}

class Component extends ActionListener {
	constructor(componentId) {
		super();
		this.componentId = componentId;
		this.target = $('[data-cid="' + this.componentId + '"]');
	}
	
	getElement(ele){		
		this.$ele = $(this.target, ele)
		return this.$ele[0];
	}

	get hover(){
		return this._hover;
	}

	set hover(value) {
		this._hover = value;

		if(this._hover)
			this.$ele.attr("data-state", "hover");
		else{
			this.$ele.attr("data-state", this.$ele.attr("data-state").replace(/hover/g,""));
		}
	}

}

export default Component;