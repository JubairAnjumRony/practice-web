// const phones=[20000,30000,21111,7666];

// function cheapest(phones){
//    let cheapest=phones[0];
//    for(const phone of phones){
//     if(phone<cheapest){
//         cheapest=phone;
//     }
//    }
//    return cheapest;
// }

// console.log(cheapest(phones));

const mobiles=[
    {name:'samsung',price: 20000, camera:'12mp',color:'black'},
    {name:'apple',price: 120000, camera:'12mp',color:'black'},
    {name:'oneplus',price: 22000, camera:'12mp',color:'black'},
    {name:'oppe',price: 30000, camera:'12mp',color:'black'},
    {name:'vivo',price: 10000, camera:'12mp',color:'black'},
]

function getcheapestphones(phones){
     let min=phones[0];
     for( const phone of phones){
        if( phone.price<min.price){
            min=phone;
        }
     }
     return min;
}

const result=getcheapestphones(mobiles);
console.log(result);