// ● Write the code, one line for each action:
// a) Create an empty object user.
// b) Add the property name with the value John.
// c) Add the property surname with the value Smith.
// d) Change the value of the name to Pete.
// e) Remove the property name from the object.
let user = {};
user = { name: "John", surname: "Smith" };
console.log("🚀 ~ user:", user);
user.name = "pete";
console.log("🚀 Change user name:", user);
delete user.name;
console.log("🚀 Remove name:", user);
