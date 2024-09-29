let friends =(name)=>{
    return name;
}

const filterEvenlengthNames = (friends) =>{
    let EvenlengthNames =[];
     for(const friend of friends){
        if(friend.length%2 === 0){
            EvenlengthNames.push(friend);
        }
     }
     return EvenlengthNames;
    }
console.log(friends(['atik','abir','nayem']));


console.log(filterEvenlengthNames((['atik','abir','nayem'])));

