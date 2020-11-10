// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

`Nested function can access the variable internal because of closure. Closure enables a nested function to not only access variable within its own function scope but also variables defined in the global scope
as well as variables defined in the scope of its surrounding function. Surrounding function in this case is myFunction()`


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let counter = 0;
  return function retCount() {
      while(num >= 1) {
          counter += num;
          num--
      }
      return counter;
  }
}

let logSum = summation(4);
console.log(logSum());
