'use strict'

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, pref) => {
    const first = arr;
    const second = pref;

    const result = first.map(i => second +i);
    return result;
}

console.log(addPrefix(names, 'Mr '));