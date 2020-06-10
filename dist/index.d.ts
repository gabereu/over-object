export interface Over {
    forEach: (callback: {
        (value: any, key: String): void;
    }) => any;
    map: (callback: {
        (value: any, key: String): any;
    }) => Over;
    filter: (callback: {
        (value: any, key: String): Boolean;
    }) => Over;
    find: (callback: {
        (value: any, key: String): Boolean;
    }) => any;
    imprime: () => void;
    [key: string]: any;
}
export default function over(object: Object): Over;
