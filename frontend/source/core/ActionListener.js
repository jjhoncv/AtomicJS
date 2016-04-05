import Utils from './Utils.js';
import ActionEvent from './ActionEvent.js';

class ActionListener {
	constructor() {
		this.listeners = {};
		this.actions = {};
	}

	addActionListener(actionType, fn, bubbles, cancelable) {
		var actionInit = {
			bubbles : bubbles || null,
			cancelable : cancelable || null
		}

		fn.uid = fn.uid || Utils.getUID();
		this.actions[actionType] = this.actions[actionType] || new ActionEvent(actionType, actionInit);

		let listener = {
			action : this.actions[actionType],
			fn : fn
		}

		this.listeners[actionType] = this.listeners[actionType] || [];
		this.listeners[actionType].unshift(listener);
	}

	removeActionListener(actionType, fn) {
		if(this.listeners[actionType] && fn.uid) {
			let listeners = this.listeners[actionType];
			for(let i in listeners) {
				let listener = listeners[i];
				if(listener.fn.uid === fn.uid) {
					delete this.listeners[actionType][i];
					break;
				}
			}
		}
	}

	dispatchAction(actionType, data) {
		if(this.listeners[actionType]) {
			let listeners = this.listeners[actionType];
			for(let i in listeners) {
				let listener = listeners[i];
				let action = listener.action;
				let callback = listener.fn;
				
				action.target = this;

				callback.apply(this, [action]);

				if(action.defaultPrevented) {
					action.defaultPrevented = false;
					break;
				}
			}
		}
	}
}

export default ActionListener;