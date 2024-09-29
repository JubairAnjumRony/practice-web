/*
chair --> 3cft
table -->10 cft
bed  -->50 cft
*/

function woodQuantity(chair,table ,bed){
    const perchairwood=3;
    const pertablewood=10;
    const perbedwood=50;

    const totalchairwood=chair*perchairwood;
    const totaltablewood=table*pertablewood;
    const totalbedwood=bed*perbedwood;

    const wood=totalchairwood+totaltablewood+totalbedwood;


    return wood;
}


const result=woodQuantity(2,2,1);

console.log(result);
