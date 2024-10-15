const user = {id:1,name:'gorib amir', job:'actor'};
// Javascript Object Notation (JSON)
const json = JSON.stringify(user);
// console.log(user);
// console.log(json);

const shop ={
    address:"nilkeht",
    owner:"shadow",
    Laptop:{
        model:"lenovo",
        year:2039,
        price:4343
    },
    products:['laptop','mic','monitor','headphone'],
    revenue:45000,
    isOpen:true,
    isNew:false
}

const objtoJson = JSON.stringify(shop);
console.log(objtoJson,"\n");
const jsontoObject = JSON.parse(objtoJson);
console.log(jsontoObject);