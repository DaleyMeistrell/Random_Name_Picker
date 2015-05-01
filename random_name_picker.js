 var bucket_list = ['Greece', 'France', 'Nepal',
  'Australia', 'Thailand', 'Switzerland', 'Panama',
   'Ireland', 'Spain', 'Portugal'];

   /*console.log(bucket_list[2]);
   console.log(bucket_list[5]);
   console.log(bucket_list);*/


 /*var i = 0;
     function eachDestination(){
       console.log(bucket_list[i]);
       i++; 
     }
    eachDestination();*/
function eachDestination() { 
var pick = Math.floor(Math.random() * bucket_list.length)
var destinationPicker = bucket_list[pick];
console.log(destinationPicker);
}

/*var pick = bucket_list[Math.floor(Math.random()*bucket_list.length)];

var destinationPicker = bucket_list[Math.floor(Math.random() * bucket_list.length)];
console.log(destinationPicker);

/*var eachDestination = function() {
	console.log(eachDestination)
};*/
