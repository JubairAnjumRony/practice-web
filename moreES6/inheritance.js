class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    
}
const  a =new Truck('tata',54545454,8878);
console.log(a);

const b =new Vehicle('van',98989);
console.log(b);