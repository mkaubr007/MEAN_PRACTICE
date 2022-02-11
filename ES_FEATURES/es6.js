//1. let and const keywords :-
// let i = 10;
// console.log(i);   
// const PI = 3.14;
// console.log(PI);

//2. Arrow Functions:-
// let sum = (a, b) => a + b;
// console.log(sum(10, 20)); 

//3. Multi-line Strings:-
// let greeting = `Hello World,     
//                 Greetings to all,
//                 Keep Learning and Practicing!`
//                 console.log(greeting);

//4. Default Parameters:-
// let calculateArea = function(lenght = "manish", breadth ="kumar") {  
    // const rectangle=lenght * breadth;
    // console.log(rectangle); 
   
// }
// calculateArea(); 

//5. Template Literals
// const firstName="Manish";
// const lastName="Kumar";
// let name = `My name is ${firstName} ${lastName}`
// console.log(name);

//6. Destructuring Assignment:-
//Array Destructuring
// let fruits = ["Apple", "Banana"];
// let [a, b] = fruits; 
// console.log(a, b);
// let person = {name: "Manish", age: 24};
// let {name, age} = person; // Object destructuring assignment
// console.log(name, age);

//7. Promise
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
//  countValue.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
//  );

//8. Classes:-
// class UserProfile {   
//     constructor(firstName, lastName) { 
//        this.firstName = firstName;
//        this.lastName = lastName;     
//     }   
//     getName() {       
//       console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);    
//     } 
//  }
//  let obj = new UserProfile('Manish', 'Kumar');
//  obj.getName();


