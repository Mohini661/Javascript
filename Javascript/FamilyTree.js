let Person = {
  name: "Ratanji",
  age: 75,
  weight: "60kg",
  child: [ 
    {
      name: "Harshad",
      age: 54,
      child: [
        { name: "Mohini", age: 26, city: "Chikhli" },
        { name: "Chintan", Age: 22, hobby: "Cricket" },
      ],
    },
    {
      name: "Dinesh",
      age: 50,
      child: [
        { name: "Heer", age: 15, hobby: "Swimming" },
        { name: "Parv", Age: 5, City: "Vyara" },
      ],
    },
    {
      name: "Mahesh",
      age: 60,
      child: [
        { name: "Avi", age: 25, city: "Dungri" },
        { name: "Atri", Age: 20, hobby: "Cooking" },
    ],
},
],
};
console.log("name:",Person.child[0].child[0].name)
console.log("name:",Person.child[1].child[0].name)
console.log("name:",Person.child[2].child[0].name)
