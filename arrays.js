//1.Write a function that takes an array of numbers as input and returns the sum of all the numbers/
//Adding items in an array
//reduce method
let arr1 = [1,2,3,4,5,6,7];
let add =arr1.reduce((acc,curr) => acc+ curr);
console.log({add});
//for each method
const arr =[1,2,3,4,5,6,7];
let sum = 0 ;
arr.forEach((b) => sum += b)
console.log({sum})
//looping method
const arr3 = [1,2,3,4,5,6,7];
let sumation = 0;
for(i =0;i <arr3.length;i++){
    sum +=arr3[i];
}
console.log(sum);
//Write a function that takes two numbers as input and returns true if their sum is greater than 100,and false otherwise
function addition(w,y){
    return ((w+y>=100))
}
console.log(addition(40,50))

//Write a function that takes a string as input and returns the number of vowels in the string
//2. Using Regex expression
function getVowels(string) {
    let Vowels = "aAeEiIoOuU";
    let vowelsCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(
    "The Number of vowels in -" +
        " Esther Naserian:" +
        getVowels(
            "Esther Naserian"
        )
);
//Using reduce() and indexOf() method
function countVowelsReduce(str) {
    const vowels = "aeiouAEIOU";
    return str
        .split("")
        .reduce(function (count, char) {
            return vowels.indexOf(char) !== -1
                ? count + 1
                : count;
        }, 0);
}
const result = countVowelsReduce("Esther Naserian");
console.log(result);
//Write a function that takes in a array of numbers as a parameter and returns the second largest number in the array
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  // Example usage:
  const array = [5, 2, 10, 8, 3];
  const secondLargest = findSecondLargest(array);
  console.log("Second largest element:", secondLargest);
  //Write a function that takes a string as a parameter and returns true if the string is a palindrome and false otherwise
 
  function checkPalindrome(string) {
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string =('Naserian ');
const value = checkPalindrome(string);

console.log(value);




