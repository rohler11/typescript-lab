interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];
//
const findNameOfTallestMountain = (array: Mountain[]): string => {
  let currentTallest: Mountain = array[0];
  //   deck of cards example^ ^ ^
  array.forEach((mountain) => {
    if (mountain.height > currentTallest.height) {
      currentTallest = mountain;
    }
  });
  return currentTallest.name;
};

console.log(findNameOfTallestMountain(mountains));
//
//
interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "iPhone", price: 1000 },
  { name: "Sammich", price: 7 },
];
// return average price of products v v v---------------------------
const calcAverageProductPrice = (array: Product[]): number => {
  let sum: number = 0;
  array.forEach((items) => {
    sum += items.price;
  });
  return sum / array.length;
};

console.log(calcAverageProductPrice(products));
//
// second half---------------------------------------------

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "Motor", price: 10.0 }, quantity: 10 },
  { product: { name: "Sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];
//
const calcInventoryValue = (array: InventoryItem[]): number => {
  let sum: number = 0;
  array.forEach((item) => {
    sum += item.product.price * item.quantity;
  });
  return sum;
};
//
console.log(calcInventoryValue(inventory));
//
// --------------bonus------------

const findProductByNameAndGiveMeTheValue = (
  array: InventoryItem[],
  name: string
): number => {
  let found: InventoryItem | undefined = array.find((item) => {
    return item.product.name === name;
  });
  return found.product.price;
};
