# Over Object

Over Object is a package for adding helpful functions to objects

## Installation

```bash
npm install over-object
```
## Usage

```js
import over from 'over-object';

const object = { Hello: 'World' }

over(object).forEach((value, key) => {console.log(key + ' ' + value)})
```

## API

The function adds useful functions to the property of the object passed in the parameter.

- forEach
    ```js
    import over from 'over-object';

    const object = { Hello: 'World' }

    over(object).forEach((value, key) => {console.log(key + ' ' + value)}) // Hello World
    ```

- map
    ```js
    import over from 'over-object';

    const object = { Hello: 'World' }

    const mapped = over(object).map((value, key) => value + 'and Universe')

    console.log(mapped); // { Hello: 'World and Universe' }
    ```

- filter
    ```js
    import over from 'over-object';

    const object = { Hello: 'World', and: 'Universe' }

    const filtered = over(object).filter((_value, key) => key === 'and')

    console.log(filtered) // { and: 'Universe' }
    ```

- find
    ```js
    import over from 'over-object';

    const object = { Hello: 'World', and: 'Universe' }

    const finded = over(object).filter((value) => value === 'World')

    console.log(finded);// 'World'
    ```

- You can chain function calls
    ```js
    import over from 'over-object';

    const object = { Hello: 'World' }

    over(object).map((value, key) => value + 'and Universe').forEach((value, key) => {console.log(key + ' ' + value)}) // 'Hello World and Universe'
    ``` 

## License
[MIT](https://choosealicense.com/licenses/mit/)