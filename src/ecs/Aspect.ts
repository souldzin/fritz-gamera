import {ICtor} from "utilities/ICtor";

export class Aspect {
    static all = <T>(ctors: Array<ICtor<T>>) => 
        (lookup: {[key: string]: Array<string>}) => {
            const keys = ctors.map(x => x.name);
            const arrays = keys.map(x => lookup[x]);
            return arrayIntersection(arrays);
        }

    static any = <T>(ctors: Array<ICtor<T>>) => 
        (lookup: {[key: string]: Array<string>}) => {
            const keys = ctors.map(x => x.name);
            const arrays = keys.map(x => lookup[x]);
            return mergeArraysNoDuplicates(arrays);
        }
}

const arrayIntersection = (stringArrays: Array<Array<string>>) => 
    stringArrays
        .sort((a, b) => a.length - b.length)
        .shift()
        .filter(x => stringArrays.every(a => a.indexOf(x) !== -1));

const mergeArraysNoDuplicates = (stringArrays: Array<Array<string>>) =>
    Array.from(new Set([].concat(...stringArrays)));
