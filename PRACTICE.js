const prompt = require('prompt-sync')();

console.log(`Practice 1: Sums of N numbers`);
let numNum = Number(prompt(`Enter number of numbers: `)), nums = [], sum = 0;
for (let i = 1; i <= numNum; i++) {
    let num = Number(prompt(`Enter number ` + i + `: `));
    nums.push(num);
}
for (let i = 0; i < nums.length; i++) sum += nums[i];
console.log(`Sum of numbers:`, sum);

console.log(`Practice 2: Calculating fibonacci sequence ending at term #`);
let fibonacci = [0, 1], term = Math.floor(Number(prompt(`Enter fibonacci term #: `)));
if (isNaN(term) || term < 1) console.log(`Invalid term #.`);
else if (term === 1) console.log([0]);
else {
    for (let i = 1; i < term - 1; i++) fibonacci.push(fibonacci[i - 1] + fibonacci[i]);
    console.log(fibonacci);
}

console.log(`Practice 3: Function that removes an array element at a specific index`);
let sample = [1, "Bee", 3, "Moose"];
const remove = (array, index) => {
    let arr1 = array.slice(0, index), arr2 = array.slice(index + 1);
    return arr1.concat(arr2);
}
console.log(remove(sample, 2));

console.log(`Practice 4: Function that adds an array element at a specific index`);
const add = (array, index, value) => {
    let arr1 = array.slice(0, index), arr2 = array.slice(index);
    arr1.push(value);
    return arr1.concat(arr2);
}
console.log(add(sample, 2, "Wolf"));

console.log(`Practice 5: Basic grocery list manager`)
let groceries = [], groceryCount = Math.floor(Number(prompt(`Enter number of groceries: `)));
for (let i = 0; i < groceryCount; i++) groceries.push(prompt(`Enter grocery: `).toUpperCase());
do {
    let grocery = prompt(`Search grocery ("Quit" = quit): `).toUpperCase();
    if (grocery === "QUIT") break;
    else if (groceries.indexOf(grocery) >= 0) console.log(`Item is in list.`);
    else console.log(`Item is not in list.`);
} while (true);

console.log(`Practice 6: Advanced grocery list manager`);
groceries = [];
do {
    console.log(`\n1. List\n2. Search\n3. Add\n4. Remove\n0. Exit\n`);
    let opt = Math.floor(Number(prompt(`Enter option: `)));
    if (isNaN(opt) || opt < 0 || opt > 4) continue;
    else if (opt === 0) break;
    else if (opt === 1) {
        if (groceries.length === 0) console.log(`List is empty.`);
        else for (let i = 0; i < groceries.length; i++) console.log(i + 1 + `.`, groceries[i]);
    } else if (opt === 2) {
        if (groceries.length === 0) {
            console.log(`List is empty.`);
            continue;
        }
        let grocery = prompt(`Search grocery: `).toUpperCase();
        if (grocery === "") continue;
        else if (groceries.indexOf(grocery) === -1) console.log(`Item is not in list.`);
        else console.log(`Item is in list.`);
    } else if (opt === 3) {
        let grocery = prompt(`Add grocery: `).toUpperCase();
        if (grocery === "") continue;
        else if (groceries.indexOf(grocery) === -1) groceries.push(grocery);
        else console.log(`Item is already in list.`);
    } else {
        if (groceries.length === 0) {
            console.log(`List is empty.`);
            continue;
        }
        let grocery = prompt(`Remove grocery: `).toUpperCase();
        if (grocery === "") continue;
        let index = groceries.indexOf(grocery);
        if (index === -1) console.log(`Item is already not in list.`);
        else groceries = remove(groceries, index);
    }
} while (true);