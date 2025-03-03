// Question #4
const inventory = [
	{ name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 50 },
	{ name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

const minQuatity = (quantityd) => {
	let minProsuct = quantityd[0].quantity;
	let productquantityd;
	for (let item of quantityd) {
		let currentProduct = item.quantity;
		// console.log(currentProduct);
		if (currentProduct < minProsuct) {
			minProsuct = currentProduct;
			productquantityd = item;
			// console.log("minProsuct: ", minProsuct);
		}
	}
	// console.log("minProsuct answer:", minProsuct);
	// console.log("productquantityd: ", productquantityd);
	return productquantityd;
};

minQuatityProduct = minQuatity(inventory);
console.log(
	`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuatityProduct.name} ซึ่งมี ${minQuatityProduct.quantity} ชิ้น`
);
