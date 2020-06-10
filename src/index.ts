interface Indexable {
    [key: string]: any;
}

export interface Over {
    forEach: (callback: {(value: any, key: String): void}) => any;
    map: (callback: {(value: any, key: String): any}) => Over;
    filter: (callback: {(value: any, key: String): Boolean}) => Over;
    find: (callback: {(value: any, key: String): Boolean}) => any;
    imprime: () => void;
    [key: string]: any;
}

export default function over (object:Object) : Over{
    const overFrom = {...object};

    Object.defineProperty(overFrom, 'forEach', {
        value: function (callback: {(value: any, key: String): void}) {
            for (const [key, value] of Object.entries(this)) {
                callback(value, key);
            }
        },
        writable: false
    });

    Object.defineProperty(overFrom, 'map', {
        value: function (callback: {(value: any, key: String): void}) {
            const mappedObject:Indexable = {};
            for (const [key, value] of Object.entries(this)) {
                mappedObject[key] = callback(value, key);
            }
            return over(mappedObject);
        },
        writable: false
    });

    Object.defineProperty(overFrom, 'filter', {
        value: function (callback: {(value: any, key: String): Boolean}) {
            const filteredObject:Indexable = {};
            for (const [key, value] of Object.entries(overFrom)) {
                const response = callback(value, key);
                if(response){
                    filteredObject[key] = value;
                }
            }
            return over(filteredObject);
        },
        writable: false
    });

    Object.defineProperty(overFrom, 'find', {
        value: function (callback: {(value: any, key: String): Boolean}) {
            for (const [key, value] of Object.entries(overFrom)) {
                const response = callback(value, key);
                if(response){
                    return value;
                }
            }
            return null;
        },
        writable: false
    });

    return (overFrom as Over);
}