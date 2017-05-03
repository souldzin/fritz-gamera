import {NamedComponent} from "./../ecs";

@NamedComponent("woah, that worked!")
export class TestComponent {
    constructor(val: string) {
        this.val = val;
    }

    val: string;
}
