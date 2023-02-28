const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];
films[2] = "Jurassic Park";

films.push("A.I.");


console.log(director + " is the director of " + films.length + " films");

films.push("E.T.");
console.log(director + " is the director of " + films.length + " films");

console.log("My favourite " + director + " film is " + films[1]);

const oddNumbers = [1, 3, 5, 7, 9];
const randomStuff = [1.15, "bicycle", true];