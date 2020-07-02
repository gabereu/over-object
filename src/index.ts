interface Indexable {
    [key: string]: any;
}

interface Over {
    forEach: (callback: {(value: any, key: String): void}) => any;
    map: (callback: {(value: any, key: String): any}) => Over;
    filter: (callback: {(value: any, key: String): Boolean}) => Over;
    find: (callback: {(value: any, key: String): Boolean}) => any;
    get: (path: String) => any;
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
            for (const [key, value] of Object.entries(this)) {
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
            for (const [key, value] of Object.entries(this)) {
                const response = callback(value, key);
                if(response){
                    return value;
                }
            }
            return null;
        },
        writable: false
    });

    function objectGetByPath(path:String, obj: Object): any {
        const pathPartRegex = /(?:^([a-zA-Z_]\w*)(?:\[(\w+)\])?)/;
        const paths = path.split('.');
        const first = paths[0];
        paths.shift();
        const remaining = paths.join('.');

        if(first){
            const pathMatched = first.match(pathPartRegex);
            if(!pathMatched) throw 'Wrong Path'
            const field = pathMatched[1];
            const arrayPath = pathMatched[2];
            const nextDepth = arrayPath ? (obj as any)[field][arrayPath] : (obj as any)[field];
            return objectGetByPath(remaining, nextDepth)
        }else{
            return obj;
        }

    }

    Object.defineProperty(overFrom, 'get', {
        value: function (path: String) {
            return objectGetByPath(path, this);
        },
        writable: false
    });

    return (overFrom as Over);
}