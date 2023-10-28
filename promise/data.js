let employees=[
  {eid:101,ename:"Rahul Gandhi", esal:45000},
  {eid:102,ename:"Sonia Gandhi", esal:55000},
]
let createEmployee=(emp)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          employees.push(emp)
          let dbFlag=false 
          dbFlag? resolve("Emp Data inserted") : reject("Failed")
      },4000)
  })
}
let getEmployees=()=>{
   setTimeout(()=>{
      let rows=""

      for(emp of employees){
          rows = rows + `<tr>
                         <td>${emp.eid}</td>
                         <td>${emp.ename}</td>
                         <td>${emp.esal}</td>
                        </tr>`
      }
      //document.getElementById('tbody_Data').innerHTML="GM"
      document.getElementById('tbody_Data').innerHTML=rows
   },1000)
}
createEmployee({eid:103, ename:'Priyanka Gandhi',esal:65000})
.then((msg)=>{
  console.log(msg)
  getEmployees()
})
.catch((err)=>{
  console.log(err)
})
