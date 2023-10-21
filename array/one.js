let arr = [20,30,40,50]
let arr1 = arr.pop()
console.log(arr1)
console.log(arr)


arr.push(60)
console.log(arr)
console.log(arr.length)

arr.shift()
arr.unshift(10)
console.log(arr)

let a = arr.toString()     //a is now a string
console.log(a)

 let b = arr.join("_")
 console.log(b,typeof b)

 let arr2 = [10,20,30,40,50,1,2,3,4]
 let c = arr2.filter((value)=>{
  return value<20
 })

 console.log(c)
 console.log(arr2)

 let d = arr2.map((maped)=>{
  return maped + 10
 })
 console.log(d)
let arr3 = [1,2,3,3]
 let e = arr3.reduce((fun,he)=>{
  return fun + he
 })
 console.log(e)