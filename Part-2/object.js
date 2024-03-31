var car = {
    // properti
    type: "Fiat",
    model: "500",
    color: "white",
    // method
    start: function(){
        console.log("ini method start");
        },
        drive: function(){
        console.log("ini method drive");
        },
        brake: function(){
        console.log("ini method brake");
        },
        stop: function(){
        console.log("ini method stop");
        }
};

console.log(car.type);
//Result "Fiat"
console.log(car.color);
//Result "white"
 car.start();
//Result "ini method start"
 car.drive();
//Result "ini method drive