'use strict';

var allProducts = []
var displayProducts = []
var index = 0;

function Product(productName, fileLocation) {
  this.productName = productName;
  this.fileLocation = fileLocation;
  allProducts.push(this);
}

new product('bag', 'img/bag.jpg');
new product('banana', 'img/banana.jpg');
new product('bathroom', 'img/bathroom.jpg');
new product('boots', 'img/boots.jpg');
new product('breakfast', 'img/breakfast.jpg');
new product('bubblegum', 'img/bubblegum.jpg');
new product('chair', 'img/chair.jpg');
new product('cthulhu', 'img/cthulhu.jpg');
new product('dog-duck', 'img/dog-duck.jpg');
new product('dragon', 'img/dragon.jpg');
new product('pen', 'img/pen.jpg');
new product('pet-sweep', 'img/pet-sweep.jpg');
new product('scissors', 'img/scissors.jpg');
new product('shark', 'img/shark.jpg');
new product('sweep', 'img/sweep.png');
new product('tauntaun', 'img/tauntaun.jpg');
new product('unicorn', 'img/unicorn.jpg');
new product('usb', 'img/usb.gif');
new product('water-can', 'img/water-can.jpg');
new product('wine-glass', 'img/wine-glass.jpg');


//idea is to create a static array with the images, generate as many random number that is .length of the static array that corresponds to the position of the static array, then splice that position towards the back half of the array while still using the first half of the array to push images into displayProducts.

function random() {
  var index = Math.floor(Math.random(allProducts.length) * allProducts.length);
  //I believe that this is creating a random number for each of the new product, how to create a unique number per product?
    if (displayProducts.indexOf(index) > 0) {
      index = Math.floor(Math.random(allProducts.length) * allProducts.length);
      //this is telling my code to redo the command if any of the random numbers equals zero
    } else {
      displayProducts.push(index);
      //this is pushing any random numbers generated into the displayProducts array, perhaps I can nest another condiition to redo a random number if a duplicate already exists in the array...
    }

  return index;
}

//then I create an array that chooses random 3 of the first half of the displayProducts array while splicing that results towards the back half of the array so that it is not immediately choosen again? How? Event listener that returns false would work maybe, but I thought event listener worked solely on html information and not JS information within an array? 
