class CoffeeMachine{
    _waterAmount = 0;
    #coffeeBeansQty =0; 

    constructor(power){
        this._power = power;
        console.log(`created a coffee machine , power : ${power}`);
    };
    get power(){
        return this._power;
    }
    
    set waterAmount(value){
        if(value < 0){
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount(){
        return this._waterAmount;
    }
    set coffeeBeansQty(value){
        if (value <0 ){
            value = 0;
        }
        this.#coffeeBeansQty = value;
    }
    get coffeeBeansQty(){
        return this.#coffeeBeansQty;
    }
}
class MegaCoffeeMachine extends CoffeeMachine {
    getCoffeeBeenRequired(type){
        switch(type){
            case "small":
                return 250;
            case "medium":
                return 500;
            case "large":
                return 750;
        }
    }
}
let megaCoffeeMachine = new MegaCoffeeMachine(500);
megaCoffeeMachine.waterAmount = 50;
megaCoffeeMachine.coffeeBeansQty = 10;

console.log(`power is ${megaCoffeeMachine.power} and water amount is ${megaCoffeeMachine.waterAmount} and ${megaCoffeeMachine.coffeeBeansQty} kg coffe beens is left.`)
let coffeeType = "small";
console.log(`A ${coffeeType} coffee is requires ${megaCoffeeMachine.getCoffeeBeenRequired(coffeeType)} and gm of coffee beans.`);