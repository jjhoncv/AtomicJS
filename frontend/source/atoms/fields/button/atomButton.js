import Atom from "../../../core/Atom.js";
import $ from "jquery";

class atomButton extends Atom {
	constructor(componentId) {
		super(componentId);
		this.init();
	}

	get hover(){
		return this.hover;
	}

	set hover(value) {
		this.hover = value;

		if(this.hover)
			this.button.addClass('hover');
		else
			this.button.removeClass('hover');
	}

	catchDom(){
		this.button = $(this.getElement('.atom-button'));
	}

	subscribeEvents() {
		this.button.on('mouseover', this.events.handleMouseOver);
		this.button.on('click', this.events.handleClick);
	}

	get events() {
		return {
			handleMouseOver : (e) => {
				this.dispatchAction('mouseover');
			},
			handleClick : (e) => {
				this.dispatchAction('click');
			}
		}
	}

	init(){
		this.catchDom();
		this.subscribeEvents();
	}

}

export default atomButton;