// Question #5
const products = [
	{
		name: "เสื้อยืด",
		price: 10,
		quantity: 2,
	},
	{
		name: "กางเกงยีนส์",
		price: 5,
		quantity: 3,
	},
	{
		name: "เสื้อเชิ้ต",
		price: 10,
		quantity: 5,
	},
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
const calculateTotalPrice = (product, promotionCode) => {
	let totelPiceproduct = 0;
	for (let item of product) {
		// console.log("product: ", product);
		// console.log("item: ", item);
		// console.log(`item : ` + item.price);
		totelPiceproduct += item.price * item.quantity;
	}
	// console.log("totelPiceproduct: ", totelPiceproduct);
	switch (promotionCode) {
		case "SALE20":
			console.log("totelPiceproduct befor 20: ", totelPiceproduct);
			totelPiceproduct *= 0.2;
			console.log("totelPiceproduct 20: ", totelPiceproduct);
			break;
		case "SALE50":
			console.log("totelPiceproduct befor 50: ", totelPiceproduct);
			totelPiceproduct *= 0.5;
			console.log("totelPiceproduct: ", totelPiceproduct);
			break;
	}
	console.log("resultTotle", totelPiceproduct);
	return totelPiceproduct;
};

const totelPice = calculateTotalPrice(products, promotionCode);
console.log(totelPice);
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"));
