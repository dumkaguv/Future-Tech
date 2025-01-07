class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error("Can't instantiate abstract class 'BaseComponent'!");
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop];
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop];

        target[prop] = newValue;

        if (newValue !== oldValue) {
          this.updateUI();
        }

        return true;
      },
    });
  }

  updateUI() {
    throw new Error("Need to be implemented method 'updateUI()'!");
  }
}

export default BaseComponent;
