"use strict";
let mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
//
const findNameOfTallestMountain = (array) => {
    let currentTallest = array[0];
    //   deck of cards example^ ^ ^
    array.forEach((mountain) => {
        if (mountain.height > currentTallest.height) {
            currentTallest = mountain;
        }
    });
    return currentTallest.name;
};
console.log(findNameOfTallestMountain(mountains));
let products = [
    { name: "iPhone", price: 1000 },
    { name: "Sammich", price: 7 },
];
// return average price of products v v v---------------------------
const calcAverageProductPrice = (array) => {
    let sum = 0;
    array.forEach((items) => {
        sum += items.price;
    });
    return sum / array.length;
};
console.log(calcAverageProductPrice(products));
let inventory = [
    { product: { name: "Motor", price: 10.0 }, quantity: 10 },
    { product: { name: "Sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 },
];
//
const calcInventoryValue = (array) => {
    let sum = 0;
    array.forEach((item) => {
        sum += item.product.price * item.quantity;
    });
    return sum;
};
//
console.log(calcInventoryValue(inventory));
//
// --------------bonus------------
const findProductByNameAndGiveMeTheValue = (array, name) => {
    let found = array.find((item) => {
        return item.product.name === name;
    });
    return found.product.price;
};
