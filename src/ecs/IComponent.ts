/*
    Components are nothing more than data.
    A Behavior or System will know how to read / update a component.
*/

export interface IComponent {
    [key: string]: any;
}
