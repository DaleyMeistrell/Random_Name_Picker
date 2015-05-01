 var bucket_list = ['Greece', 'France', 'Nepal',
  'Australia', 'Thailand', 'Switzerland', 'Panama',
   'Ireland', 'Spain', 'Portugal'];

   /*console.log(bucket_list[2]);
   console.log(bucket_list[5]);
   console.log(bucket_list);*/


function eachDestination() { 
var pick = Math.floor(Math.random() * bucket_list.length)
var destinationPicker = bucket_list[pick];
console.log(destinationPicker);
document.getElementById("chosen_one").innerHTML = destinationPicker;
}



