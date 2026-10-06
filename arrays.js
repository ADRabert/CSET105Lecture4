const groceries = ["Milk", "Eggs", "Frosted Flakes", "Salami", "Juice"];
groceries.push("Bread");
groceries.unshift("Cheese");
for (let i = 0; i < groceries.length; i++) console.log(i + 1 + `.`, groceries[i]);
console.log(`\nI had`, groceries[Math.floor(Math.random() * groceries.length)], `in the morning.`);

const students = [
	1068838, "Austin Rabert", 22, "arabert8838@stevenscollege.edu",
	1070311, "Brandon Lopez", 18, "blopez0311@stevenscollege.edu",
	3, "Jack Moher", 18, "jmoher3@stevenscollege.edu",
	4, "Xander Cunningham", 18, "xcunningham4@stevenscollege.edu"
];
for (let i = 0; i < students.length; i += 4) console.log(`ID:`, students[i] + `\nName:`, students[i + 1] + `\nAge:`, students[i + 2] + `\nEmail:`, students[i + 3] + `\n`);
console.log(`My name is`, students[1], `& I'm`, students[2], `years old.`);

let str = "Welcome to CSET!", splitStr = str.split(" ");
console.log(splitStr);

let sample1 = [4, 13, 21, 6, 9, -34], sample2 = [12, 24, 63, -42];
console.log(Math.max(...sample1, ...sample2));