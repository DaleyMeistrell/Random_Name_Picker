var bucket_list =  [{name: 'Greece', src: ('Images/Greece.jpg')},
					{name: 'France', src: ('Images/France.jpg')},
					{name: 'Nepal', src: ('Images/Nepal.jpg')},
					{name: 'Australia', src: ('Images/Australia.jpg')},
					{name: 'Thailand', src: 'Images/Thailand.jpg'},
					{name: 'Switzerland', src: 'Images/Switzerland.jpg'},
					{name: 'Panama', src: 'Images/Panama.jpg'},
					{name: 'Ireland', src: 'Images/Ireland.jpg'},
					{name: 'Spain', src: 'Images/Spain.jpg'},
					{name: 'Portugal', src: 'Images/Portugal.jpg'}]


function eachDestination() { 
var pick = Math.floor(Math.random() * bucket_list.length)
var destinationPicker = bucket_list[pick];
console.log(destinationPicker);
console.log("<img src='" + destinationPicker.src + "'>");
document.getElementById("chosen_one").innerHTML = destinationPicker.name;
document.getElementById("chosen_image").innerHTML = "<img src='" + destinationPicker.src + "'>";
}

