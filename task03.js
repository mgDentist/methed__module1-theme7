'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const prefixedNames = [];

const addPrefix = (arr, prefix) => {
    for (let i = 0; i < arr.length; i++) {
        prefixedNames.push(`${prefix} ${names[i]}`);
    }

    console.log(prefixedNames);
};

addPrefix(names, 'Mr');