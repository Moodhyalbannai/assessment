const products = [
  {
    id: 201,
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
  },
  {
    id: 202,
    name: "T-shirt",
    category: "Clothing",
    price: 19.99,
  },
  {
    id: 203,
    name: "Coffee Maker",
    category: "Kitchen Appliances",
    price: 79.99,
  },
  {
    id: 204,
    name: "Running Shoes",
    category: "Footwear",
    price: 59.99,
  },
  {
    id: 205,
    name: "Bookshelf",
    category: "Furniture",
    price: 149.99,
  },
];

/**********
  Question 1:
  You have a function getProductName(product) that:
  - receives a product object
  - returns the name of the product
  Don't forget to uncomment the console.log
  ===
  ANSWER: Laptop
  **********/
console.log(`----------------------Question 1----------------------`);
function getProductName(product) {
  return product.name
}
console.log(getProductName(products[0]));

/**********
  Question 2:
  You have a function that:
  - receives a product object
  - receives a category name
  - returns true if the product's category matches the provided category name, otherwise returns false
  ===
  ANSWER: true
  **********/
console.log(`----------------------Question 2----------------------`);

function isProductCategoryMatching(product, category) {
  if (product.category == category) return true;
  else{
    return false;
  }
}
console.log(isProductCategoryMatching(products[1], "Clothing"));

/**********
  Question 3:
  addProduct(products, product):
  - receives an array of product objects
  - receives a new product object (with id, name, category, and price)
  - adds the new product to the array
  - returns the updated array
  ===
  ANSWER: 
  [
    {
      "id": 201,
      "name": "Laptop",
      "category": "Electronics",
      "price": 999.99
    },
    {
      "id": 202,
      "name": "T-shirt",
      "category": "Clothing",
      "price": 19.99
    },
    {
      "id": 203,
      "name": "Coffee Maker",
      "category": "Kitchen Appliances",
      "price": 79.99
    },
    {
      "id": 204,
      "name": "Running Shoes",
      "category": "Footwear",
      "price": 59.99
    },
    {
      "id": 205,
      "name": "Bookshelf",
      "category": "Furniture",
      "price": 149.99
    },
    {
      "id": 206,
      "name": "Headphones",
      "category": "Electronics",
      "price": 149.99
    }
  ]
  **********/
  console.log(`----------------------Question 3----------------------`);

function addProduct(products, product) {
    products.push(newProduct);
    return products;
}

const newProduct = {
  "id": 206,
  "name": "Headphones",
  "category": "Electronics",
  "price": 149.99
};

console.log(addProduct(products, newProduct));

/**********
  Question 4:
  countElectronicsProducts(products):
  - receives an array of product objects
  - returns the number of products in the "Electronics" category
  ===
  ANSWER: 2
  **********/
  console.log(`----------------------Question 4----------------------`);
function countElectronicsProducts(products) {
    const numberOfProducts = products.filter(obj => obj.category === "electronics");
    return numberOfProducts.length;
}

console.log(countElectronicsProducts(products));




/**********
  Question 5: 🌶️
  listProductNamesByCategory(products, category):
  - receives an array of product objects
  - receives a category name
  - returns an array of product names that belong to the specified category
  ===
  ANSWER: ["Laptop", "Headphones"]
  **********/
  console.log(`----------------------Question 5----------------------`);
function listProductNamesByCategory(products, category) {
  return products.filter((product)=> product.category == category).name;
}
console.log(listProductNamesByCategory(products, "Electronics"));



/**********
Question 6: 🌶️🌶️
You have a function getCheapestProduct(products) that:
- receives an array of product objects
- returns the product object with the lowest price
===
ANSWER: 
{
  "id": 202,
  "name": "T-shirt",
  "category": "Clothing",
  "price": 19.99
}
**********/
console.log(`----------------------Question 6----------------------`);

function getCheapestProduct(products) {
  const lowestObjectPrice = products.find((obj) => obj.price > 0);
  return lowestObjectPrice;
}
console.log(getCheapestProduct(products));

/**********
  Question 7:
  You have a function removeProductById(products, productId) that:
  - receives an array of product objects
  - receives a product id (number)
  - removes the product with the matching id from the array
  - returns the updated array
  ===
  ANSWER: 
  [
    {
      "id": 201,
      "name": "Laptop",
      "category": "Electronics",
      "price": 999.99
    },
    {
      "id": 203,
      "name": "Coffee Maker",
      "category": "Kitchen Appliances",
      "price": 79.99
    },
    {
      "id": 204,
      "name": "Running Shoes",
      "category": "Footwear",
      "price": 59.99
    },
    {
      "id": 205,
      "name": "Bookshelf",
      "category": "Furniture",
      "price": 149.99
    }
  ]
  **********/
  console.log(`----------------------Question 7----------------------`);
function removeProductById(products, productId) {
  const removedProduct = products.pop(products.productId).map(products)
  return removedProduct;
}

console.log(removeProductById(products, 202));

/**********
  Question 8: 🌶️🌶️🌶️
  getProductsByPriceRange(products, minPrice, maxPrice):
  - receives an array of product objects
  - receives a minimum price (number) and a maximum price (number)
  - returns an array of product objects that fall within the specified price range (inclusive)
  ===
  ANSWER: 
  [
    {
      "id": 202,
      "name": "T-shirt",
      "category": "Clothing",
      "price": 19.99
    },
    {
      "id": 204,
      "name": "Running Shoes",
      "category": "Footwear",
      "price": 59.99
    }
  ]
  **********/

function getProductsByPriceRange(products, minPrice, maxPrice) {
  //use filter 
}

// console.log(getProductsByPriceRange(products, 19.99, 59.99));
