abstract class ElementBase extends HTMLElement {
    // Derived class constructor must call super("IDofTemplateHTML") first.
    constructor(templateID: string) {
        super();
        this.attachShadow({ mode: 'open' });
        var el = document.getElementById(templateID) as HTMLTemplateElement;
        if (!el)
            throw Error(`No template found for ID '{templateID}'. Must pass the ID of the template in constructor to base class, like super('myID');`)
        const template = el.content;
        this.shadowRoot.appendChild(template.cloneNode(true));
    }

    connectedCallback() {
        const attr = this.getAttribute('caller');
        if (!attr)
            throw Error("There is no 'caller' attribute on the component.");
        const varAndProp = this.parseCallerString(attr);
        const state = window[varAndProp[0]];
        const delegate = this.update.bind(this);
        state.subscribe(varAndProp[1], delegate);
    }

    update() {
        console.log("update called start");
        const attr = this.getAttribute('caller');
        if (!attr)
            throw Error("There is no 'caller' attribute on the component.");
        const varAndProp = this.parseCallerString(attr);
        const externalValue = window[varAndProp[0]][varAndProp[1]];
        this.updateUI(externalValue);
        console.log("update called end - " + externalValue);
    }

    private parseCallerString(caller: string): [string, string] {
        const segments = caller.split(".");
        if (segments.length != 2)
            throw Error("caller attribute must follow 'globalVariable.property' format.");
        return [segments[0], segments[1]];
    }

    // Use this.shadowRoot in the implementation to manipulate the DOM as needed in response to the new data.
    abstract updateUI(data: any): void;
}