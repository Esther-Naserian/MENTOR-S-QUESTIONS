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