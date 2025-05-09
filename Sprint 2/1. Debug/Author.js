const author = {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
};
// The program will not work because the is a comma after each value in the object instead of a semi colon.
for (const string of author) {
    console.log(string);
}