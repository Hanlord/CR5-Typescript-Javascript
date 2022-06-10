class Animal {
  name: string;
  age: number;
  img: string;
  gender:string;
  size:string;
  vaccine: boolean;
  
  constructor(name: string, age: number, pic: string, gender:string, size:string,vaccine: boolean) {
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
    return `<div class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top d-sm-block d-none" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center bg-dark text-white">${this.name}</h5>
          <p class="card-text">Gender:${this.gender}<br>Age:${this.age}<br>Size:${this.size}</p>
          <div class="text-center">
          <button type="button" class="btn-vac btn btn-success btn-block w-100">Vaccine ${this.vaccine} &ensp;<i class="fa-solid fa-award"></i></button>
        </div>
        </div>
      </div>
    </div>`;
  }
  
}

class Dog extends Animal {

  constructor(name: string, age: number, pic: string, gender:string, size:string,vaccine: boolean, public breed: string, public training: boolean) {
    super(name, age, pic, gender, size,vaccine);
    this.breed = breed;
    this.training = training;
  }

  display() {
    return `<div class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top d-sm-block d-none" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center bg-dark text-white">${this.name}</h5>
          <p class="card-text">Gender: ${this.gender}<br>Age: ${this.age}<br>Size: ${this.size}</p>
          <div class="text-center">
          <button type="button" class="btn-vac btn btn-success btn-block w-100">Vaccine ${this.vaccine}&ensp;<i class="fa-solid fa-award"></i></button>  
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

  constructor(name: string, age: number, pic: string, gender:string, size:string,vaccine: boolean, public breed: string, public furColor: string, public URLbreed: string) {
    super(name, age, pic, gender, size,vaccine);
    this.breed = breed;
    this.furColor = furColor;
    this.URLbreed = URLbreed;
  }

  display() {
    return `<div class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top d-sm-block d-none" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title text-center bg-dark text-white">${this.name}</h5>
          <p class="card-text">Gender: ${this.gender}<br>Age: ${this.age}<br>Size: ${this.size}</p>
          <div class="text-center">
          <button type="button" class="btn-vac btn btn-success btn-block w-100">Vaccine ${this.vaccine}&ensp; <i class="fa-solid fa-award"></i></button>  
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

let array: Array<Animal> = [];

new Animal("Bacon", 5, "../img/piggy.jpg", " female", " small",true);
new Animal("Spike", 4, "../img/hedgehog.jpg", " male", " small",true);

new Dog("Sushi", 2, "../img/shepherd.jpg", " female", " large",false," Australian Shepherd", true);
new Dog("Platano", 5, "../img/poodle.jpg", " male"," small",true, " Poodle", false);
new Dog("Toto", 5, "../img/pug.jpg", " male"," medium",true, " Pug", true);
new Dog("Jimmy Chew", 5, "../img/bigears.jpg", " male"," small",false, " Bigearsprettything", true);

new Cat("Feline Dion", 5, "../img/angora.jpg"," female", " medium",true, " Angora", " Grey", "www.angoras.com");
new Cat("Meowley Cyrus", 1, "../img/Siamese.jpg"," female", " medium",false, " Siamese", " Ginger", "www.siamese.com");

console.log(array);

for (let val of array) {
  (document.getElementById("result") as HTMLElement).innerHTML += val.display();
}

let ascendingbtn =
    (document.getElementById("sorti")as HTMLElement).addEventListener("click",sortAge);
    function sortAge(){
    let sortedArray = array.sort((a, b) => a.age - b.age);
      return sortedArray;
    }
    sortAge();


let ColorR = 
    (document.getElementById("result") as HTMLElement).addEventListener("click", changeColor);
    function changeColor(){
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let yellow = Math.floor(Math.random() * 255);
        document.body.style.backgroundColor = `rgb(${red},${green},${yellow})`;
    }
changeColor();

// let vaccine: boolean = true;
// function checkColor(){
//     if (vaccine = true){
//     (document.getElementsByClassName("btn-vac")[0]as HTMLElement).style.backgroundColor = "green";
//     } else if(vaccine = false){
//     (document.getElementsByClassName("btn-vac")[0]as HTMLElement).style.backgroundColor = "red";
//     }
//   }
// checkColor();

function colorC() {
    let btns = document.getElementsByClassName("btn-vac");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            array[i].vaccine = !array[i].vaccine;
            colorC();
        });
    }
}
