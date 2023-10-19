class Account{
  constructor(){
      console.log("Account class - constructor method")
  }
}
class Saving_account extends Account{
  constructor(){
      super()
      console.log("Saving_account - Class Constructor method")
  }
}
new Saving_account()