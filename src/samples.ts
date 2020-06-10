import over from './index';

const data = {
    data1: 'A string',
    data2: [1,2,3],
    data3: {
        value: 10
    }
}

over(data).forEach((value, key) => {
    console.log(key + ': ' + value);
})
