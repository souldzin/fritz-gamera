import {NamedComponent} from "../ecs";

@NamedComponent("woah, that worked!")
class TestComponent {
    constructor(val: string) {
        this.val = val;
    }

    val: string;
}

export {TestComponent};