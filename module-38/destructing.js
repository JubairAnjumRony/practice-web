const employee = {
    emploteename: 'rakib',
    profession:'jobholder',
    salary:5000,
    address:'dhaka',
    phones:{
        model:'samsung',
        year:2021,
        country:'korea',
        watch:{
            color:'black',
            price:5000,
            brand:'germin',
        },
        price:50000,
    },
    ride:'car',
    language:['html','css','js'],
};

// const {emploteename,profession} = employee;
// console.log(emploteename ,profession);
// const {brand,price} = employee?.phones?.watch;
// console.log(brand,price);

// const array =[24,48];
// const [x,y]= array;
// const [a,b] =[44,77];
// console.log(a,b);
// console.log(x,y);

// function boxify(num1,num2){
//     const nums =[num1,num2];
//     return nums;
// }


// console.log(boxify(90,34));

const employeejson = JSON.stringify(employee);
console.log(employeejson);

const employeeobj = JSON.parse(employeejson);
console.log(employeeobj);

const values =Object.values(employee);
console.log(values);
const keys = Object.keys(employee);
console.log(keys);

// for
const numbers =[23,4,45,555,44423,3312];
numbers.forEach(num=>console.log(num));
console.log(numbers.map(num=>num*2));

// for of on array like object 
// loop on an object using for in


const products = [
    {name:'phone',model:'s-22', price:2000, brand:'samsung'},
    {name:'laptop',model:'nitro', price:450000, brand:'acer'},
    {name:'watch',model:'divewatch', price:53333, brand:"citizen"}
]

const newProduct = {name:'monitor', model:'lg', price:20000, brand:'lg'};
// copy products array and add newProduct into the array
const allProducts = [...products,newProduct];
console.log(allProducts);
const remaining =products.filter(p=>p.name!=='phone');
console.log(remaining);
const find =products.find(q=>q.name === 'watch');
console.log(find);