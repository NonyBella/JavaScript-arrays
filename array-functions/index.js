
/*
    Question 1

       Mutating array methods are operations that can be performed on an 
       array that completely changes it.

       Examples of methods that can mutate an array;
       a. array.push()
       b. array.shift()
       c. array.splice()
       d. array.sort()
       e. array.unshift()

       Non-mutating array methods are operations that can be performed without 
       changing the array.

       Examples of non-mutating array methods;
       a.  array.slice()
       b.  array.map()
       c.  array.filter()
       d.  array.concat() 
*/

//      Question 2a
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'python'];
languages.push('Kotlin');
console.log(languages);

//      Question 2b
languages.splice(3, 0, 'Java');
console.log(languages);

//       Question 2c
languages.splice(0,1);
console.log(languages);

//        Question 2d
languages.splice(0,0,'Scala','Swift');
console.log(languages);

//        Question 2e
languages.splice(5,1,'Go','Rust');
console.log(languages);

//        Question 3
let fruit =['apple', 'mango','banana'];
function changeFruit(){
    fruit[2]='orange';
    return fruit;
}
let newFruitArray = changeFruit();
newFruitArray = ['apple', 'mango', 'orange'];

//          Question 4
function checkMaximumNumber(array){
let maximumNumber = 0;
for(let i = 0; i< array.length; i++) {
    if(array[i] > maximumNumber) {
        maximumNumber = array[i]
    }
}

return maximumNumber;

}
let result = checkMaximumNumber([]);
console.log(result);




