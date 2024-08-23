class Animal {
  constructor(species, color, legs) {
    this.species = species;
    this.color = color;
    this.legs = legs;
  }

  getSpecies() {
    return this.species;
  }

  setSpecies(newSpecies) {
    this.species = newSpecies;
  }

  getColor() {
    return this.color;
  }

  getAnimalDescription() {
    console.log(
      `${this.name} falls under ${this.species} species and has ${this.legs} legs`
    );
  }
}

class Dog extends Animal {
  constructor(breed, name, species, color, legs) {
    super(species, color, legs); // Initializing the parent class by calling its constructor
    this.breed = breed;
    this.name = name;
  }

  getBreed() {
    return this.breed;
  }

  setBreed(newBreed) {
    this.breed = newBreed;
  }

  getAnimalDescription() {
    console.log(`Description method of Dog Class`)
  }
}

const dog = new Dog("Mastiff", "Tommy", "Mamal", "Black", 4);
console.log(dog.getAnimalDescription());

// console.log(10 + 5); // => Mathematical Addition

// console.log("ABC " + "XYZ"); // => String Concatenation

// console.log("10" + "5"); // 105

// console.log("10" + 5); // 105

// console.log(10 + "5"); // 105

// console.log("ABC" + 5); // ABC5

// console.log(5 + "ABC"); // 5ABC

// console.log(10 - 6);

// console.log("10" - 6);

// console.log(10 - "6");

// console.log("10" - "6");

// console.log("ABC" - "XYZ");