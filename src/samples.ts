import over from './index'

const object = { Hello: 'World' }

over(object).forEach((value, key) => {console.log(key + ' ' + value)}); // Hello World

const mapped = over(object).map((value) => value + ' and Universe')

console.log(mapped); // { Hello: 'World and Universe' }

const object2 = { Hello: 'World', and: 'Universe' }

const filtered = over(object2).filter((_value, key) => key === 'and')

console.log(filtered) // { and: 'Universe' }

const finded = over(object2).filter((value) => value === 'World')

console.log(finded);// 'World'

over(object).map((value) => value + ' and Universe').forEach((value, key) => {console.log(key + ' ' + value)}) // 'Hello World and Universe'