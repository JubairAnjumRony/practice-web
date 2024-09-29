const str ="You R AMAZING";

const vowels =['a','e','i','o','u'];


function countVowels(data){
  let count = 0;
   
  data.toLowerCase().split("").forEach((ch) => {
    vowels.includes(ch) && count++;
  });
  
  return count;
  
}

console.log('number of vowels:',countVowels(str));