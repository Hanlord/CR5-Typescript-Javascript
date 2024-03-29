"use strict";
class Animal {
    constructor(name, age, pic, gender, size, vaccine) {
        this.name = name;
        this.age = age;
        this.img = pic;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        console.log(this);
        array.push(this);
    }
    display() {
        return `<div class="col-lg-4 col-sm-6 col-xs-12 justify-content-center">
    <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top d-sm-block d-none" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center bg-dark text-white">${this.name}</h5>
          <p class="card-text">Gender:${this.gender}<br>Age:${this.age}<br>Size:${this.size}</p>
          <div class="text-center">
          <button class="text-center btn d-flex btn-vac justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine &nbsp<i class="fa-solid ${this.vaccine ? "fa-bookmark" : "fa-bookmark-slash"}"></i></button>
        </div>
        </div>
      </div>
    </div>`;
    }
}
class Dog extends Animal {
    constructor(name, age, pic, gender, size, vaccine, breed, training) {
        super(name, age, pic, gender, size, vaccine);
        this.breed = breed;
        this.training = training;
        this.breed = breed;
        this.training = training;
    }
    display() {
        return `<div class="col-lg-4 col-sm-6 col-xs-12 justify-content-center">
    <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top d-sm-block d-none" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center bg-dark text-white">${this.name}</h5>
          <p class="card-text">Gender: ${this.gender}<br>Age: ${this.age}<br>Size: ${this.size}</p>
          <div class="text-center">
          <button class="text-center btn d-flex btn-vac justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine &nbsp<i class="fa-solid ${this.vaccine ? "fa-bookmark" : "fa-bookmark-slash"}"></i></button>  
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
    constructor(name, age, pic, gender, size, vaccine, breed, furColor, URLbreed) {
        super(name, age, pic, gender, size, vaccine);
        this.breed = breed;
        this.furColor = furColor;
        this.URLbreed = URLbreed;
        this.breed = breed;
        this.furColor = furColor;
        this.URLbreed = URLbreed;
    }
    display() {
        return `<div class="col-lg-4 col-sm-6 col-xs-12 justify-content-center">
    <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top d-sm-block d-none" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center bg-dark text-white">${this.name}</h5>
          <p class="card-text">Gender: ${this.gender}<br>Age: ${this.age}<br>Size: ${this.size}</p>
          <div class="text-center">
          <button class="text-center btn d-flex btn-vac justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine &nbsp<i class="fa-solid ${this.vaccine ? "fa-bookmark" : "fa-bookmark-slash"}"></i></button>  

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
new Animal("Bacon", 3, "../img/piggy.jpg", " female", " small", true);
new Animal("Spike", 4, "../img/hedgehog.jpg", " male", " small", true);
new Dog("Sushi", 2, "../img/shepherd.jpg", " female", " large", false, " Australian Shepherd", true);
new Dog("Platano", 2, "../img/poodle.jpg", " male", " small", true, " Poodle", false);
new Dog("Toto", 3, "../img/pug.jpg", " male", " medium", true, " Pug", true);
new Dog("Jimmy Chew", 5, "../img/bigears.jpg", " male", " small", false, " Bigearsprettything", true);
new Cat("Feline Dion", 4, "../img/angora.jpg", " female", " medium", true, " Angora", " Grey", "www.angoras.com");
new Cat("Meowley Cyrus", 1, "../img/Siamese.jpg", " female", " medium", false, " Siamese", " Ginger", "www.siamese.com");
document.getElementById("sorti").addEventListener("click", agesort);
console.log(array);
for (let val of array) {
    document.getElementById("result").innerHTML += val.display();
}
function agesort() {
    array.sort(function (a, b) {
        return a.age - b.age;
    });
    printC();
}
;
function printC() {
    const container = document.getElementById("result");
    container.innerHTML = "";
    array.forEach((val) => {
        container.innerHTML += val.display();
    });
    vacbutton();
}
printC();
function vacbutton() {
    let btns = document.getElementsByClassName("btn-vac");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            array[i].vaccine = !array[i].vaccine;
            printC();
        });
    }
}
