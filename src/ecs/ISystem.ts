export interface ISystem {
    start: () => void;
    update: (time: number) => void;
    end: () => void;
}
