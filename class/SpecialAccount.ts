import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
    super(name, accountNumber)

}

    specialDeposit = (value: number) =>{
        if(this.validateStatus()){
            const finalValue = value + 10
            this.deposit(finalValue)
            console.log(`Deposito especial de ${finalValue} feito com sucesso!`)
        } else{
            console.log('algo deu errado')
        }
        
        
    }


}
