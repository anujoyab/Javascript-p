
//javascript object method 
const newSymb = Symbol('Key1');
const mobileModel = {
    brand: 'Infinix',
    model: 'HOT 45',
    processor: 'Snapdragon',
    camera: ['20 MP','12 MP','10 MP'],
    hasZoomCamera: true,
    'selfieCamera': 40,
    [newSymb]:'MyKey1',
    brandModel: function () {
        return `Mobile Brand Is ${this.brand} and Mobile Model Is ${this.brand}`;
    }
    
}


console.log(mobileModel);
console.log(mobileModel.model);
console.log(mobileModel[newSymb]);
console.log(mobileModel['selfieCamera']);

//API Calling
console.log(mobileModel.hasOwnProperty('camera'));

//function in object
console.log(mobileModel.brandModel());

//Many objects with together
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
}
const obj2 = {
    p: 4,
    q: 5,
    s: 6,
}
const obj3 ={
    m: 8,
    n: 9,
    k: 11,
}

//const objFinal = Object.assign(obj1,obj2,obj3);
//console.log(objFinal);

//Modern Way
const objFinal = {...obj1,...obj2,...obj3}
console.log(objFinal);


//Constructor Object
function Person(first,last){
    (this.firstName = first),
    (this.lastName = last);
}
const person1 = new Person('Anujoy','Aovi');
const person2 = new Person('Nafis','Rodela');
const person3 = new Person('Leonel','Messi');

console.log(person1);
console.log(person2);
console.log(person3);


//Javascript Array
const brand=['Samsung','Apple','Infinix','LG','Vivo'];
console.log(brand);
//console.log(typeof(brand))
brand[2]='DeepSeeki';
brand[6]='Volvo';
brand[9]='Navy';
console.log(brand.length);
console.log(brand.toString());

console.log(brand[brand.length-1]);
console.log(brand);



//Javascript Math
let num = 35.28548585885;

console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

//Squire Value
let num1 = 5;
console.log(Math.pow(num1,4));

//Root Value
let num2 = 144;
console.log(Math.sqrt(num2));

//Always Want Positive Value
let num3 = -56;
console.log(Math.abs(num3));
console.log(Math.PI);

//Sine Value Calculate
console.log(Math.sin(30*Math.PI/180));

//Different Random Number
console.log(Math.random());

//Want 2 number after decimal
console.log(Math.random().toFixed(2)*10);

//Example Project
let upperValue = 6;
let lowerValue = 1;
let restValue = Math.ceil(Math.random()* upperValue);
console.log(restValue);

//Roll Dice
function rollDice(){
    let randomNumber = Math.floor(Math.random()*6)+1;
    let imageSource = "img/" + randomNumber + ".jpg";
    document.getElementById('ludo').src=imageSource;
}



// JAVASCRIPT STRINGS

const fullName = "Anujoy";
const country = "Bangladesh";
let student = `I am ${fullName}. \n I am from ${country}.`;
console.log(student);

const dark1 = new String("Anujoy");
const dark2 = "I am from Bangladesh";
console.log(dark1[5]);
console.log(dark1.length);
//Position
console.log(dark2.charAt(3));
//Specific Word
console.log(dark2.indexOf('B'));
//Cut the text
console.log(dark2.slice(9));
console.log(fullName.slice(1,6));
console.log(fullName.substring(4,1));

//For Cutting Space
const dark3 = "       ANUJOY        ";
console.log(dark3.trim());
console.log(dark3.trimStart());

///Javascript Loop
//For Loop
let car = ['BMW','Audi','Fiat','Volvo','Tesla','Ford','Toyota']
car.push('Byud');
for(let i = 0; i<car.length; i++){
    console.log(car[i]);
}

//For In Loop
let person = {
    Name:'Anujoy Biswas',
    Age: 25,
    Country: 'Bangladesh',
};
for(let i in person){
    console.log(i+': ' + person[i]);
}