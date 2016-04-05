import $ from "jquery";

class Component {
	constructor(componentId) {
		this.componentId = componentId;
		this.content = document.querySelector('[data-cid="' + this.componentId + '"]');
	}
	
	ele(ele){
		return $(this.content, ele)[0]
	}

	suscribe(event, fn){
		this.content.addEventListener(event, fn, false);
	}

	trigger(event){
		this.content.dispatchEvent(new Event(event));		
	}
	
	/*on(event, fn){
		this.button.on(event, fn);
	}*/

}

export default Component;