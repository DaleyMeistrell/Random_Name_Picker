var bucket_list =  [{name: 'Greece', src: 'Images/Greece.jpg'},
					{name: 'France', src: 'Images/France.jpg'},
					{name: 'Nepal', src: 'Images/Nepal.jpg'},
					{name: 'Australia', src: 'Images/Australia.jpg'},
					{name: 'Thailand', src: 'Images/Thailand.jpg'},
					{name: 'Switzerland', src: 'Images/Switzerland.jpg'},
					{name: 'Panama', src: 'Images/Panama.jpg'},
					{name: 'Ireland', src: 'Images/Ireland.jpg'},
					{name: 'Spain', src: 'Images/Spain.jpg'},
					{name: 'Portugal', src: 'Images/Portugal.jpg'},
					{name: 'Argentina', src: 'Images/Argentina.jpg'},
					{name: 'Canada', src: 'Images/Canada.jpg'},
					{name: 'Cuba', src: 'Images/Cuba.jpg'},
					{name: 'Denmark', src: 'Images/Denmark.jpg'},
					{name: 'Egypt', src: 'Images/Egypt.jpg'},
					{name: 'Fiji', src: 'Images/Fiji.jpg'},
					{name: 'Hungary', src: 'Images/Hungary.jpg'},
					{name: 'India', src: 'Images/India.jpg'},
					{name: 'Indonesia', src: 'Images/Indonesia.jpg'},
					{name: 'Japan', src: 'Images/Japan.jpg'},
					{name: 'Madagascar', src: 'Images/Madagascar.jpg'},
					{name: 'Morocco', src: 'Images/Morocco.jpg'},
					{name: 'NewZealand', src: 'Images/NewZealand.jpg'},
					{name: 'Nicaragua', src: 'Images/Nicaragua.jpg'},
					{name: 'Palau', src: 'Images/Palau.jpg'},
					{name: 'South Africa', src: 'Images/SouthAfrica.jpg'},
					{name: 'Vietnam', src: 'Images/Vietnam.jpg'},
					{name: 'Russia', src: 'Images/Russia.jpg'}]


function eachDestination() { 
var pick = Math.floor(Math.random() * bucket_list.length)
var destinationPicker = bucket_list[pick];
console.log(destinationPicker);
console.log("<img src='" + destinationPicker.src + "'>");
document.getElementById("chosen_one").innerHTML = destinationPicker.name;
document.getElementById("chosen_image").innerHTML = "<img src='" + destinationPicker.src + "'>";
}





