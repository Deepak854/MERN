class CoffeeMachine{
    _waterAmount = 0; // AMOUNT of water inside (_ means protecting variable)
    //privet property
    #coffeeBeansQty =0; //amount of coffeebeans left in machine

    constructor(power){
        this._power = power;
        console.log(`created a coffee machine , power : ${power}`);
    };
    get power(){
        return this._power;
    }
// so water amount you can alter , which is not a good thing .
// beaing a user you shouldn't able to alter the water amount. 
/*you can press only button and choose the type of coffee . It will choose the water amount required   
to make that coffee */
/* currently both the variable waterAmount and power  are public so you can easily set and get them 
without any getter or setter directly from outside world */

//SO WE WANT TO PROTECT THE ACCESS TO WATERAMOUNT PROPERTY. WE WANT HAVE MORE CONTROL OVER WATER AMOUNT PROPERTY
    
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
// CREATE THE COFFEE MACHINE
let coffeeMachine = new CoffeeMachine(100);
console.log(coffeeMachine)
//add water
// can you add water to the machine directly ?
/* the coffee machine itself take water from connections . so you should't be able to add water 
 to coffeeMachine directly . it is determined by the coffee machine dirctly  */
 //so you should protect the access to the water ammount
coffeeMachine.waterAmount = -10; // waterAmount will become 0 not -10
console.log(coffeeMachine)
console.log();

// protecting power level
coffeeMachine.waterAmount = 50;
coffeeMachine.coffeeBeansQty= 20;
console.log(`power is ${coffeeMachine.power}W and water amount is ${coffeeMachine.waterAmount}L and ${coffeeMachine.coffeeBeansQty} kg coffeebeans is left`);

