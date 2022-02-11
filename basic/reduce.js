//reduce():-
function sum(arr) {
  let sum = 0;
  for (const val of arr) {
    sum += val;
    console.log(sum)
  }
  return sum;
}
sum([1, 3, 5, 7]);

