/// <reference path="watchProperty.ts" />

class TestState extends StateBase {
    constructor() {
        super();
        this.texty = "";
    }

    @WatchProperty
    texty: string;

    @WatchProperty
    numbery: number;
}