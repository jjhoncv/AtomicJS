import Component from "./Component";

class Molecule extends Component{
	constructor(componentId) {
		super(componentId);
		this.atom = {};
	}
}

export default Molecule;