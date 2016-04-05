import Component from "./Component";

class Molecule extends Component{
	constructor(componentId) {
		super(componentId);
		this.atoms = [];
	}

	addAtom(atom){
		this.atoms.push(atom);
	}

	getAtom(componentId){
		for (var i = 0; i < this.atoms.length; i++) {
			if (this.atoms[i].componentId === componentId) {
				return this.atoms[i];
			}
		}
	}

	getAtoms(){
		return this.atoms;
	}
}

export default Molecule;