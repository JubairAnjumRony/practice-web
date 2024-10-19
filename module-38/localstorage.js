const addTolocalstorage = ()=>{
    const inputid =document.getElementById('key');
    const id = inputid.value;
    const inputvalueid =  document.getElementById('value');
    const value = inputvalueid.value;
    
    localStorage.setItem(id,value);
    inputid.value ="";
    inputvalueid.value="";
}