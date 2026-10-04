const prompt = require('prompt-sync')();

console.log(`Practice 1: Sums of N numbers`);
let numNum = Number(prompt(`Enter number of numbers: `)), nums = [], sum = 0;
for (let i = 0; i < numNum; i++) {
    let num = Number(prompt(`Enter number: `));
    nums.push(num);
}
for (i = 0; i < nums.length; i++) sum += nums[i];
console.log(`Sum of numbers:`, sum);

console.log(`Practice 2: Finding fibonacci number from term #`);
let fibonacci = [1, 1], term = Number(prompt(`Enter fibonacci term #: `));
if (isNaN(term) || term < 0) console.log(`Invalid term #.`);
else if (term < 3) console.log(1);
else {
    for (i = 1; i < term; i++) fibonacci.push(fibonacci[i - 1] + fibonacci[i]);
    console.log(fibonacci[term - 1]);
}

console.log(`Practices 3 & 4: Functions that remove/add array elements at specific indexes`);
let sample = [1, "Bee", 3, "Moose"];
const remove = (array, index) => {
    let arr1 = array.slice(0, index), arr2 = array.slice(index + 1);
    return arr1.concat(arr2);
}, add = (array, index, value) => {
    let arr1 = array.slice(0, index), arr2 = array.slice(index);
    arr1.push(value);
    return arr1.concat(arr2);
}
console.log(remove(sample, 2));
console.log(add(sample, 2, "Wolf"));

console.log(`Practice 5: Basic grocery list manager`)
let groceries = [], groceryCount = Math.floor(Number(prompt(`Enter number of groceries: `)));
for (i = 0; i < groceryCount; i++) groceries.push(prompt(`Enter grocery: `).toUpperCase());
do {
    let grocery = prompt(`Search grocery ("Quit" to quit): `);
    if (grocery.toUpperCase() === "QUIT") break;
    else if (groceries.indexOf(grocery.toUpperCase()) >= 0) console.log(`Item is in list.`);
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
        let grocery = prompt(`Search grocery: `);
        if (grocery === "") continue;
        else if (groceries.indexOf(grocery.toUpperCase()) >= 0) console.log(`Item is in list.`);
        else console.log(`Item is not in list.`);
    } else if (opt === 3) {
        let grocery = prompt(`Add grocery: `);
        if (grocery === "") continue;
        else if (groceries.indexOf(grocery.toUpperCase()) >= 0) console.log(`Item is already in list.`);
        else groceries.push(grocery.toUpperCase());
    } else {
        if (groceries.length === 0) {
            console.log(`List is empty.`);
            continue;
        }
        let grocery = prompt(`Remove grocery: `);
        if (grocery === "") continue;
        let index = groceries.indexOf(grocery.toUpperCase());
        if (index === -1) console.log(`Item is already not in list.`);
        else groceries = remove(groceries, index);
    }
} while (true);