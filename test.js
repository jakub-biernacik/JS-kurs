var myCar2 = {

    maxSpeed: "Maksymalna prędkość pojazdu to " + 70,
    driver: "Jakub",
    drive: function (speed, time) {
        console.log("Samochód jedzie " + speed * time + "/h");
    },
    logDriver: function(){
        console.log("Imie kierowcy to " + this.driver);
    }

};

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);