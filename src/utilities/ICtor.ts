export interface ICtor<T> {
    new (...p: any[]): T;
    name?: string;
}
