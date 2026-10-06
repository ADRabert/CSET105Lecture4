const prompt = require('prompt-sync')();

console.log(`Exercise 1: Create own function that finds max of numbers`);
const max = (...nums) => {
	let result = -Infinity;
	for (let num of nums) if (num > result) result = num;
	return result;
}
let nums1 = [4, 13, 21, 6, 9, -34], nums2 = [12, 24, 63, -42];
console.log(max(...nums1, ...nums2))

console.log(`Exercise 2: Reverse digits of numbers`);
const reverse = (num) => {
	let str = String(num);
	if (str[0] === "-") {
		var tmp = "-";
		str = str.slice(1);
	} else var tmp = "";
	for (let i = str.length - 1; i >= 0; i--) {
		tmp += str[i];
	}
	return tmp;
}
console.log(reverse(-123));

console.log(`Exercise 3: Convert string to uppercase with own function`);
const cvtUpper = (str) => {
	let tmp = "";
	for (let char of str) {
		let asciiNum = char.charCodeAt(); // Looked up how to convert chars to ASCII values
		if (asciiNum >= 97 && asciiNum <= 122) tmp += String.fromCharCode(asciiNum - 32); // Looked up how to reverse the operation
		else tmp += String.fromCharCode(asciiNum);
	}
	return tmp;
}
console.log(cvtUpper("Hello World!"));

console.log(`Exercise 4: Invert case of string`);
const ivtCase = (str) => {
	let tmp = "";
	for (let char of str) {
		let asciiNum = char.charCodeAt();
		if (asciiNum >= 65 && asciiNum <= 90) tmp += String.fromCharCode(asciiNum + 32);
		else if (asciiNum >= 97 && asciiNum <= 122) tmp += String.fromCharCode(asciiNum - 32);
		else tmp += String.fromCharCode(asciiNum);
	}
	return tmp;
}
console.log(ivtCase("Hello World!"));