'use strict';

//global variable with all new products being pushed in the array, due to push command within the constructor
var allProducts = []

//global variable with 3 random products to display from the all products array
var threeProducts = []

//global variable setting index at 0
var index = 0;

//constructor pushing all products into array
function Product(productName, fileLocation) {
  this.productName = productName;
  this.fileLocation = fileLocation;
  allProducts.push(this);
}

//products going into constructor
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

//function that generates a random product in the var index and pushes to the threeProducts array
function random() {
  var index = allProducts[Math.floor(Math.random() * (allProducts.length))];
  //console.log(index);
    if (threeProducts.indexOf(index) > 0) {
      // index = Math.floor(Math.random(allProducts.length));
      index = allProducts[Math.floor(Math.random() * (allProducts.length))];
        return index;
    } else {
    //   //this shit is broken for now, come back to it later...
    //   //threeProducts.push(index);
    return index;
    }
  //return index;
}

//test logs
console.log(allProducts);
console.log(threeProducts);

//variables being assigned IDs per html
var first = document.getElementById("first")
var second = document.getElementById("second")
var third = document.getElementById("third")

//function that is supposed to set the random product to each var iamge
function setRandom() {
  var firstImage = random();
  console.log(firstImage);
    while (firstImage == threeProducts[0]||
      firstImage == threeProducts[1]||
      firstImage == threeProducts[2]) {
        firstImage = random();
      }
    threeProducts.push(firstImage);


  var secondImage = random();
  console.log(secondImage);
    while (secondImage == threeProducts[0]||
      secondImage == threeProducts[1]||
      secondImage == threeProducts[2]||
      secondImage == firstImage) {
        secondImage = random();
      }
    threeProducts.push(secondImage);

  var thirdImage = random();
  console.log(thirdImage);
    while (thirdImage == threeProducts[0]||
      thirdImage == threeProducts[1]||
      thirdImage == threeProducts[2]||
      thirdImage == firstImage||
      thirdImage == secondImage) {
        thirdImage = random();
      }
    threeProducts.push(thirdImage);

  //sets attributes with specified file location to variables where we have previously set the IDs per html
  first.setAttribute('src', threeProducts[0].fileLocation);
  second.setAttribute('src', threeProducts[1].fileLocation);
  third.setAttribute('src', threeProducts[2].fileLocation);
}

//calling the setRandom function to apply images
setRandom();

//supposed to add event listener, click, to each variable being set with the setRandom function but doesn't appear to do anything but console.log...
first.addEventListener('click', setRandom);
second.addEventListener('click', setRandom);
third.addEventListener('click', setRandom);
