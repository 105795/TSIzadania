let inventory = [];

function findProductIndex(productName) {
  return inventory.findIndex(product => product.name === productName.toLowerCase());
}

function addProduct(product) {
  const index = findProductIndex(product.name.toLowerCase());
  if (index === -1) {
    inventory.push({ name: product.name.toLowerCase(), quantity: product.quantity });
    console.log(`${product.name.toLowerCase()} added to inventory`);
  } else {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name.toLowerCase()} quantity updated`);
  }
}

function removeProduct(productName, quantity) {
  const index = findProductIndex(productName.toLowerCase());
  if (index === -1) {
    console.log(`${productName.toLowerCase()} not found`);
  } else {
    if (inventory[index].quantity >= quantity) {
      inventory[index].quantity -= quantity;
      console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[index].quantity}`);
      if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
      }
    } else {
      console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[index].quantity}`);
    }
  }
}
