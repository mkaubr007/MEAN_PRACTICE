//1. Basic assignment
// const user = {
//     firstName: "Manish",
//     lastName: "Kumar"
// };
// const {firstName, lastName} = user;
// console.log(firstName); 
// console.log(lastName); 

//2.Assigning to new variable names
// const o = {p:"Manish", q: "Kumar"};
// const {p:fname, q: lname} = o;
// console.log(fname); 
// console.log(lname); 

//3.Default values
// const {a = 10, b = 5} = {a: 3};
// console.log(a); 
// console.log(b)

//4.Assigning to new variables names and providing default values
// const {a: aa = 10, b: bb = 5} = {a: 3};
// console.log(aa); 
// console.log(bb); 

//5.Unpacking fields from objects passed as a function parameter
// const user = {
//     id: 132151062,
//     displayName: 'M.K',
//     fullName: {
//       firstName: 'Manish',
//       lastName: 'Kumar'
//     }
//   };
//   function userId({id}) {
//     return id;
//   }
//   function whois({displayName, fullName: {firstName: name}}) {
//     return `${displayName} is ${name}`;
//   }
//   console.log(userId(user)); 
//   console.log(whois(user));  

//6.Computed object property names and destructuring
// let key = 'z';
// let {[key]: f} = {z: 'manish'};
// console.log(f); 

//7.Rest in Object Destructuring
// let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
// a; 
// b; 
// rest; 
// console.log(a);
// console.log(b);
// console.log(rest);

//8.Invalid JavaScript identifier as a property name
// const fName = { 'manish': true };
// const { 'manish': fname } = fName;
// console.log(fname); 

//9.Combined Array and Object Destructuring
// const props = [
//     { id: 1, name: 'Manish'},
//     { id: 2, name: 'kumar'},
//     { id: 3, name: 'Manish_Kumar'}
//   ]; 
//   const [,, { name }] = props;
//   console.log(name); 
  


  

  