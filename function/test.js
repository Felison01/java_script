/*const fruits = ["bananna","apple","orange","lemon","mango"];
const a= fruits.slice(-1)
console.log(a);*/
 
function String(str){
 // let a = 0;
  /*if((str.length) % 2 === 0){
    a = (str.length / 2);
  }
  else{
    a = (str.length -1) / 2;
  }*/
  for(i=0;i<str.length;i++){
    if (str[i] != str.slice(-1-i)[0]){
      console.log("not a palindrome")
      return false
    }
    console.log("palindrom")
    return true
  }
}
String('madam');
String("malayalam");
String("basu");
String("haah")