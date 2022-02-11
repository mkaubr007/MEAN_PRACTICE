//1.Basic variable assignment
// const name = ['Rajesh', 'Yogesh', 'Ganesh'];
// const [r, y, g] = name;
// console.log(r); 
// console.log(y); 
// console.log(g); 

//2.Assignment separate from declaration
// let a, b;
// [a, b] = [11, 22];
// console.log(a); 
// console.log(b); 

//3.Default values
// let a, b;
// [a=8, b=7] = [1];
// console.log(a); 
// console.log(b); 

//4.Swapping variables
// let a = 1;
// let b = 3;
// [a, b] = [b, a];
// console.log(a); 
// console.log(b); 
// const arr = [1,2,3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); 

//5.Parsing an array returned from a function
// function f() {
//     return [11, 22];
//   } 
//   let a, b;
//   [a, b] = f();
//   console.log(a); 
//   console.log(b); 
  
//6.Ignoring some returned values
// function f() {
//     return [11, 22, 33];
//   }
//   const [a, , b] = f();
//   console.log(a); 
//   console.log(b); 
//   const [c] = f();
//   console.log(c); 
  
//7.Assigning the rest of an array to a variable
// const [a, ...b] = [1, 2, 3];
// console.log(a); 
// console.log(b); 


