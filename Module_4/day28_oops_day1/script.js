class Car {
  constructor(
    make,
    model,
    engineCapacity = 0,
    color,
    transmissionType,
    carType = "HATCHBACK"
  ) {
    this.make = make;
    this.model = model;
    this.engineCapacity = engineCapacity;
    this.color = color;
    this.transmissionType = transmissionType;
    this.carType = carType;
  }

  setCarModel(newCarModel) {
    this.model = newCarModel;
  }

  getCarModel() {
    // console.log(this);
    return this.model;
  }

  getCarColor() {
    return this.color;
  }
}

const myCar = new Car("Hyundai", "Aura", 1197, "Pink", "AMT", "SEDAN"); // Object / Instance -> Its an entity which represents a class (Instantiated)
const myCar2 = new Car("Tata", "Altroz", 1197, "White", "MANUAL", "HATCHBACK");

const myCarColor = myCar.getCarColor();
// console.log(myCarColor);

const myCarModel = myCar.getCarModel();
// console.log(myCarModel);

/////////////////////////////////////////////////////////////////////
// CONSTRUCTOR FUNCTIONS
function Animal(name, breed, species, legs) {
  this.name = name;
  this.breed = breed;
  this.species = species;
  this.legs = 0;
}

const myAnimal = new Animal("Dog", "German Shephard", "Mamal", 4);

/////////////////////////////////////////////////

function test1() {
  console.log(this);
}

const test2 = function () {
  console.log(this);
};

const test3 = () => {
  console.log(this);
};

const user = {
  name: "Peter",
  greetUser: function () {
    console.log(this);
    // console.log(`Hello ${this.name}`)
  },
};

function sayHiToUser(greetText, salutation) {
  // console.log(this)
  console.log(`${greetText}, ${salutation}. ${this.userName}`); // Hi Mr. Jack, Hi Mrs. XYZZ
}

const userDetails = {
  userName: "Dwyane Johnson",
  age: 50,
};

// Bind

// const newSayHiToUser = sayHiToUser.bind(userDetails);

// Call
sayHiToUser.call(userDetails, "Hello", "Mr");

// Apply
sayHiToUser.apply(userDetails, ["Hi", "M"]);
