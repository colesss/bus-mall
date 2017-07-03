'use strict';

//global variable with all new products being pushed in the array, due to push command within the constructor
var allProducts = [];

//global variable with 3 random products to display from the all products array
var threeProducts = [];

//constructor pushing all products into array
function Product(productName, fileLocation) {
  this.productName = productName;
  this.fileLocation = fileLocation;
  this.shown = 0;
  this.clicked = 0;
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
  return allProducts[Math.floor(Math.random() * (allProducts.length))];
}

//function that is supposed to set the random product to each var iamge
function setRandom() {
  var firstImage = random();
    while (firstImage == threeProducts[0]||
      firstImage == threeProducts[1]||
      firstImage == threeProducts[2]) {
        firstImage = random();
      }
  threeProducts.push(firstImage);
  firstImage.shown++;
  console.log(firstImage.productName + ' has been shown ' + firstImage.shown)

  var secondImage = random();
    while (secondImage == threeProducts[0]||
      secondImage == threeProducts[1]||
      secondImage == threeProducts[2]||
      secondImage == firstImage) {
        secondImage = random();
      }
  threeProducts.push(secondImage);
  secondImage.shown++;
  console.log(secondImage.productName + ' has been shown ' + secondImage.shown)

  var thirdImage = random();
    while (thirdImage == threeProducts[0]||
      thirdImage == threeProducts[1]||
      thirdImage == threeProducts[2]||
      thirdImage == firstImage||
      thirdImage == secondImage) {
        thirdImage = random();
      }
  threeProducts.push(thirdImage);
  thirdImage.shown++;
  console.log(thirdImage.productName + ' has been shown ' + thirdImage.shown)
}

displayImage();

function displayImage() {
  setRandom();
  var first = document.getElementById('first')
  var second = document.getElementById('second')
  var third = document.getElementById('third')
  first.setAttribute('src', threeProducts[0].fileLocation);
  second.setAttribute('src', threeProducts[1].fileLocation);
  third.setAttribute('src', threeProducts[2].fileLocation);
  threeProducts = [];

}

var firstEvent = document.getElementById('first');
var secondEvent = document.getElementById('second');
var thirdEvent = document.getElementById('third');

firstEvent.addEventListener('click', handleClick)
secondEvent.addEventListener('click', handleClick)
thirdEvent.addEventListener('click', handleClick)

//supposed to add event listener, click, to each variable being set with the setRandom function but doesn't appear to do anything but console.log...
function handleClick(event) {
  // //this is only needed for submit buttons because they refresh the page
  // //event.preventDefault();
  
  displayImage();
}


// //variables that are suppposed to get the bar chart up and running...
// var ctx = document.getElementById('results-chart');
// var dataSet = [20, 30, 40, 50, 60];
//
// //broken bar chart, yay!!!
// var myBarChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: allProducts.productName, //using allProducts for now until I can get a functioning calculating system
//       datasets: [{
//         label: 'Most popular products'
//         data: dataSet;
//       }]
//     }
// });
