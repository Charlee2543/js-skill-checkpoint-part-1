// Question #1
const myTodo = [
	{ id: 1, todo: "Buy groceries" },
	{ id: 2, todo: "Finish homework" },
	{ id: 3, todo: "Call mom" },
	{ id: 4, todo: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
myTodo.push({ id: 5, todo: "Walk the dog" });
// console.log("myTodo push5: ", myTodo);
myTodo[3].todo = "(╯▔皿▔)╯ Go to the gym🔥🏋️🔥";
console.log(myTodo[4]);
// console.log("myTodo edit4: ", myTodo);
// console.log("myTodo chift: ", myTodo);
// delete myTodo[myTodo.length - 1].id;
// delete myTodo[myTodo.length - 1].todo;
// console.log(myTodo.length);
myTodo.pop();
// console.log(myTodo.length);
// console.log("myTodo: ", myTodo);
console.log(myTodo);

console.log(
	`To-do Id: ${myTodo[myTodo.length - 1].id} , ${
		myTodo[myTodo.length - 1].todo
	}`
);
