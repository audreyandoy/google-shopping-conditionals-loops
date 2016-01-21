var data = require("./products.json")

 

//Question 1:
console.log(data["items"].length);

//The same count information is seen labeled as "current item count at the top"
console.log(data["currentItemCount"]); 

//Question 2:

for (var availability in inventories) {
	if (inventories[availability]) === "backorder") {
		console.log(product)
	}
	else {
		console.log(null);
	}
}

//items[15].product.inventories[0].availability;



for (var i = 0; i < data["items"].length; i++ ) {
	if (data["items"][i].product.inventories[0]["availability"] === "backorder") {
		console.log(data["items"][i].product.title);
		// console.log(i)
	}
}

//Question 3:

for (var i = 0; i <data["items"].length; i++ ) {
	if (data["items"][i].product.images.length > 1) {
		console.log(data["items"][i].product.title);
	}
}

//Question 4:

for (var i = 0; i < data["items"].length; i++ ) {
	if (data["items"][i].product.brand === "Canon") {
		console.log(data["items"][i].product.title);
	}
}

//Question 5:


for (var i = 0; i < data["items"].length; i++ ) {
//console.log(data["items"][i].product.author.name);
	if (data["items"][i].product.author.name.indexOf("eBay") !=-1 && data["items"][i].product.brand === "Canon") {
	console.log(data["items"][i].product.title);
	}
}

//indexOf looks for the first occurence of the given string. Gives location of first match. If it's NOT in that string, it'll return -1. Therefore, if it does exist will NOT return -1.

//Question 6:

for (var i = 0; i < data["items"].length; i++ ) {
	console.log("Title is " + data["items"][i].product.title);
	console.log(data["items"][i].product.brand);
	console.log(data["items"][i].product.inventories[0].price);
	console.log(data["items"][i].product.images[0].link);
	console.log("-------------");
}


















