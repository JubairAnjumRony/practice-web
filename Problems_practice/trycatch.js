function loadData(){
    console.log("checking is js connected to html");
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
//   .catch(error=>console.error('Error:',error));
}
;


async function loadASync(){
   const fetchdata =  await fetch('https://jsonplaceholder.typicode.com/users');
   const data =await fetchdata.json();
   console.log(data);
}
const loadArrow= async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data =await res.json();
    console.log(data);
}
const loadCatch = async() =>{
    try{
        const res =await fetch('https://jsonplaceholder.typicode.com/users');
        const data =await res.json();
        console.log(data);
    }
    catch(error){
          console.log("error occured",error);
         
    }
}