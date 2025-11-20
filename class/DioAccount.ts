export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }
  
  public deposit = (value: number): void => {
  if (this.validateStatus()) {
    this.balance += value
    console.log(`Depósito de ${value} realizado com sucesso!`)
  }
}


  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value)
    {
      this.balance -= value
      console.log(`Voce sacou ${value} reais`)
    } else{
      console.log('Saque não realizado, saldo insuficiente ou conta inválida')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
