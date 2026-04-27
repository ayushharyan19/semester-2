let products = [
    { name : "Laptop", price : 80000},
    { name : "Phone", price : 30000}
];

function addProduct(name, price){
    products.push({name, price});
    console.log(`${name} added successfully!`);
}

function updatePrice(name, newPrice){
    let product = products.find(s=>s.name===name);

    if(product){
        product.price = newPrice;
        console.log(`${name}'s price updated successfully!`);
    }
    else{
        console.log("Product not found.");
    }
}

function getAffordableProducts(budget){
    return products.filter(s=>s.price<=budget);
}

function getMostExpensive(){
    let expensive = products[0];

    for(let i = 1; i<products.length; i++){
        if(expensive.price<products[i].price){
            expensive = products[i];
        }
    }
    return expensive;
}