class TestElement extends ElementBase {
    constructor() {
        super("pf-test");
    }
    updateUI(data) {
        this.shadowRoot.querySelector("h1").innerHTML = data;
    }
}