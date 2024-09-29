const glass = { 
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true 
};


console.log(Object.keys(glass));

console.log(Object.values(glass));
console.log(Object.entries(glass));

// delete isCleaned 

// delete glass.isCleaned;

const {isCleaned,...shortglass} = glass;
console.log(shortglass);

// Object.seal(glass);
Object.freeze(glass);
glass.source ='bangladesh';
glass.price =500;
delete glass.name;
console.log(glass);