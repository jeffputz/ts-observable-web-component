class UserBitElement extends ElementBase {
    constructor() {
        super(null);
        this.template = document.createElement("template");
        this.template.innerHTML = `<slot name="in"></slot>
<slot name="out"></slot>`;
        this.attachShadow({mode: "open"});
        this.shadowRoot.append(this.template.content.cloneNode(true));
        this.inSlot = this.shadowRoot.querySelector("slot[name='in']");
        this.outSlot = this.shadowRoot.querySelector("slot[name='out']");
    }

    private inSlot: HTMLElement;
    private outSlot: HTMLElement;

    private template: HTMLTemplateElement;

    updateUI(data: any): void {
        if (data as boolean === true) {
            this.inSlot.style.display = this.style.display;
            this.outSlot.style.display = "none";
        }
        else {
            this.inSlot.style.display = "none";
            this.outSlot.style.display = this.style.display;
        }
    }
}