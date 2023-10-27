let add = (a,b)=>{
  return a + b;
}
let multi = (a,b)=>{
  return a * b;
}
let sub = (a,b)=>{
  return a - b;
}

 function cal(a,b,callback) {
  return callback(a,b)
}

let sum = cal(10,20,add)
let product = cal(10,20,multi)
let subtr = cal(10,20,sub)
console.log(sum)
console.log(product)
console.log(subtr)