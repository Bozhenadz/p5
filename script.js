var car1 = new Object();
car1.color = "black";
car1.maxSpeed = 250;
car1.driver = {
    name: "Dzendzuk Bozhena",
    category: "B",
    personalLimitations:null
};
car1.tuning = true;
car1.numberOfAccidents = 0;

var car2 = {
    color: "grey",
    maxSpeed: 220,
    driver: {
        name: "Dzendzuk Bozhena",
        category: "C",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 5
};

car1.drive = function() {
    console.log("I am not driving at night");
};

car2.drive = function() {
    console.log("I can drive anytime");
};

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        var msg = "Driver " + this.driver.name;
        msg += this.driver.nightDriving ? " drives at night" : " does not drive at night";
        msg += " and has " + this.driver.experience + " years of experience";
        console.log(msg);
    }
};

var truck1 = new Truck("green", 4082, 80, "BMW", "X8");
truck1.AssignDriver("Dzendzuk Bozhena", false, 20);
truck1.trip();

var truck2 = new Truck("white", 6070, 60, "Audi", "q7");
truck2.AssignDriver("Dzendzuk Bozhena", true, 25);
truck2.trip();
