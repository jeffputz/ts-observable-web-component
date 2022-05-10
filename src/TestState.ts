/// <reference path="watchProperty.ts" />

class TestState extends StateBase {
    constructor() {
        super();
        this.texty = "";
        this.numbery = 0;
    }

    @WatchProperty
    texty: string;

    @WatchProperty
    numbery: number;

    @WatchProperty
    is: boolean;
}