    import { CompanyAccount } from './class/CompanyAccount'
    import { PeopleAccount } from './class/PeopleAccount'
    import { SpecialAccount } from './class/SpecialAccount'

console.log("=== Testando PeopleAccount ===")
const peopleAcc = new PeopleAccount(1, "Carlos", 123)
peopleAcc.deposit(100)
peopleAcc.withdraw(40)
peopleAcc.getBalance()

console.log("\n=== Testando CompanyAccount ===")
const companyAcc = new CompanyAccount("Empresa X", 456)
companyAcc.deposit(200)
companyAcc.getLoan(500)
companyAcc.getBalance()

console.log("\n=== Testando SpecialAccount ===")
const specialAcc = new SpecialAccount("Carlos", 789)
specialAcc.deposit(100)        // depósito normal
specialAcc.getBalance()
specialAcc.specialDeposit(100) // depósito especial +10
specialAcc.getBalance()

