const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

//  If we want to display all of the names individually with some words around them, we can use the forEach() method as follows: 

staffsDetails.forEach((staffDetail) => {
    let sentence = `I am ${staffDetail.name} a staff of Royal Suites.`;
    console.log(sentence);
  });