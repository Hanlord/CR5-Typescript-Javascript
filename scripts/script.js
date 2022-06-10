"use strict";
class Animal {
    constructor(name, age, pic, gender, size) {
        this.name = name;
        this.age = age;
        this.img = pic;
        this.gender = gender;
        this.size = size;
        console.log(this);
        array.push(this);
    }
    printInfo() {
        return `<div class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center bg-dark text-white">${this.name}</h5>
          <p class="card-text">Gender:${this.gender}<br>Age:${this.age}<br>Size:${this.size}</p>
          <div class="text-center">
          <button type="button" class="btn btn-success btn-block w-100"> <i class="fa-solid fa-award"></i></button>
        </div>
        </div>
      </div>
    </div>`;
    }
}
class Dog extends Animal {
    //   public salary?: number;
    constructor(name, age, pic, gender, size, breed, training) {
        super(name, age, pic, gender, size);
        this.breed = breed;
        this.training = training;
        this.breed = breed;
        this.training = training;
    }
    // howMuchHeEarn() {
    //   return this.age * this.salary;
    // }
    printInfo() {
        return `<div class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center bg-dark text-white">${this.name}</h5>
          <p class="card-text">Gender: ${this.gender}<br>Age: ${this.age}<br>Size: ${this.size}</p>
          <div class="text-center">
          <button type="button" class="btn btn-success btn-block w-100"> <i class="fa-solid fa-award"></i></button>  
        </div>
        <br>
        <p>Breed:${this.breed} </p>
        <p>Training: ${this.training}</p>
        </div>
      </div>
    </div>`;
    }
}
class Cat extends Animal {
    constructor(name, age, pic, gender, size, breed, furColor, URLbreed) {
        super(name, age, pic, gender, size);
        this.breed = breed;
        this.furColor = furColor;
        this.URLbreed = URLbreed;
        this.breed = breed;
        this.furColor = furColor;
        this.URLbreed = URLbreed;
    }
    printInfo() {
        return `<div class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center bg-dark text-white">${this.name}</h5>
          <p class="card-text">Gender: ${this.gender}<br>Age: ${this.age}<br>Size: ${this.size}</p>
          <div class="text-center">
          <button type="button" class="btn btn-success btn-block w-100"> <i class="fa-solid fa-award"></i></button>  
        </div>
        <br>
        <p>Breed:${this.breed} </p>
        <p>Fur color: ${this.furColor}</p>
        <p>Breed info: ${this.URLbreed}</p>
        </div>
      </div>
    </div>`;
    }
}
let array = [];
new Animal("Bacon", 5, "../img/piggy.jpg", " female", " small");
new Animal("Spike", 4, "../img/hedgehog.jpg", " male", " small");
new Dog("Sushi", 2, "../img/shepherd.jpg", " female", " large", " Australian Shepherd", true);
new Dog("Platano", 5, "../img/poodle.jpg", " male", " small", " Poodle", false);
new Dog("Toto", 5, "../img/pug.jpg", " male", " medium", " Pug", true);
new Dog("Jimmy Chew", 5, "../img/bigears.jpg", " male", " small", " Bigearsprettything", true);
new Cat("Feline Dion", 5, "../img/angora.jpg", " female", " medium", " Angora", " Grey", "www.angoras.com");
new Cat("Meowley Cyrus", 1, "../img/Siamese.jpg", " female", " medium", " Siamese", " Ginger", "www.siamese.com");
console.log(array);
for (let val of array) {
    document.getElementById("result").innerHTML += val.printInfo();
}
