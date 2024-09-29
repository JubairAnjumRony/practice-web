// You are given an array of numbers. Count how many times the a number is repeated in the array.

const numbers = [5,6,11,12,98,5];
const numbers2= [5,6,11,12,98,5]; 
// const userInput =prompt("please enter the number you want to find:");

function findRepeated(numbers,a){
     let count =0;
    //  const a =5;
     for(const num of numbers){
        if(num === a)
            count++;
     }
     console.log(count);
}

findRepeated(numbers2,a=25);



// Write a function to count the number of vowels in a string.
const string ="lazybrownfox";

function countVowels(words){
    let count =0;
      for(const char of words){
          if(char ==='a' || char === 'e' || char === 'i'  ||char === 'o' ||char ==='u')
{
    count++;
}   
   }
   return count;
}
console.log(countVowels(string));

// Write a function to find the longest word in a given string.
const sentence =" I am learning Programming to become a programmer";

function findLargestWord(string){
    // if we use .split('') the it will split the sentence into individual characters for words we need .split(' ')
    const words =string.split(' ');                 
    console.log(words);
    let largestWord = '';
    for(const word of words){
        if(word.length > largestWord.length){
            largestWord=word;
        }
    }
    return largestWord;
}
console.log(findLargestWord(sentence));


// Generate a random number between 10 and 20
const  getRandomNumber = (min,max) =>{
    return Math.random()*(max-min)+min
}

const randomNumber = parseInt(getRandomNumber(10,20));
console.log((randomNumber));