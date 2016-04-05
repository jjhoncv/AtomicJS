class ActionEvent {
	constructor(actionType, actionInit) {
		actionInit = actionInit || {};

		this.type = actionType;

		this.target = actionInit.target || null;
		this.bubbles = actionInit.bubbles || null;
		this.cancelable = actionInit.cancelable || null;
		this.defaultPrevented = false;
	}

	preventDefault() {
		this.defaultPrevented = true;
	}
}

export default ActionEvent;