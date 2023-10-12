// reverse a number using a function.
 function reverse(n){
  n = n + '';
 return n.split("").reverse().join("");
 }
  let r = reverse(223456);
 console.log(r);
 console.log(Number(reverse(23456)));