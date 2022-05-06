class TestElement extends ElementBase {
    constructor() {
        super("pf-test");
    }
    updateUI(data: any): void {
        this.shadowRoot.querySelector("h1").innerHTML = data;
    }
}