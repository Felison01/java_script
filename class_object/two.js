class bank_account{
  eid= 100;
  ename = 'rahul';
  account_info(){
    console.log('create an account');
  }
}
let a1 = new bank_account
console.log(a1);
let a2 = new bank_account
console.log(a2);
a2.account_info()