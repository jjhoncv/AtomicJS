import Molecula from "../../core/Molecule.js";
import $ from "jquery";

class moleculaSearch extends Molecula {
	constructor(componentId) {
		super(componentId);
		this.init();		
	}

	catchDom(){
		this.txtSearch = $(this.getElement('.txt_search'));
		this.btnSearch = $(this.getElement('.atom-button'));		
	}

	subscribeEvents() {
		this.btnSearch.on("click", this.events.handleClickSearch);
	}

	get events() {
		return {			
			handleClickSearch : (e) => {
				alert("search : " + this.txtSearch.val())
			},
			handleKeyupSearch : (e) => {

			}
		}
	}

	init(){
		this.catchDom();
		this.subscribeEvents();
	}

}

export default moleculaSearch;