class TV{
    constructor(brand){
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    
    incVolume(value){
        this.volume += value;
        if (this.volume < 100){
            console.log(`volume increase by ${value} `+ this.volume);
        }
        else {
            console.log(" volume can not be more than 100, volume : " + (this.volume = 100));
        }
    }
    decVolume(value){
        this.volume -= value;
        if(this.volume >= 0){
            console.log(`volume decrease by ${value} `+ this.volume);
        }
        else {
            console.log(" volume can not be less than 0, volume : " + (this.volume = 1));
        }

    }

    getChannel(num){
        if (num >0 && num <=50){
            console.log("channel no. change to : " + (this.channel = num));
        }
        else {
            console.log("channel no. does not exist: " );
        }
    }
  
    resetTv(){
        console.log("go back to channel")
        this.channel = 1;
        this.volume = 50;
    }
    tvStatus(){
        return console.log(`${this.brand} at channel ${this.channel} and volume ${this.volume}`);
    }
}
let tv2 = new TV("Parasonic");

tv2.tvStatus();
console.log();

tv2.incVolume(40);
console.log(tv2.tvStatus());
tv2.incVolume(200); 
console.log(tv2.tvStatus());
console.log();

tv2.decVolume(30);
console.log(tv2.tvStatus());
console.log()

tv2.getChannel(10);
console.log(tv2.tvStatus());
tv2.getChannel(60);
console.log(tv2.tvStatus());