
const products=[ 
   {name:'shampoo',price:300, quantity:3},
   {name:'conditioner',price:400, quantity:2},
   {name:'serum',price:500, quantity:4},
   {name:'oil',price:200, quantity:1}
]


function totalcart(products){
    let total =0;
    for(const product of products){
        const productprice=product.price*product.quantity;
        total=total+productprice;
    }

    return total;
}

console.log("checkout price is:",totalcart(products));

