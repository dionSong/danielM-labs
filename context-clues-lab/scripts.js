
var friendNames = ['Ana', 'Agus', 'facu', 'Eneko', 'Juan'],
    locations = ['Medellin', 'Bogota', 'Buenos Aires', 'Santiago', 'Lima'],
    wepons = ['dagger', 'sword', 'shield', 'gun', 'hamburger', 'pizza', 'D', 'head', 'arm', 'leg', 'cat', 'keyboard', 'cellphone' , 'laptop', 'chair', 'lunch', 'car', 'beer', 'keys', 'bird'],
    acusationHeading;

    
   

$(document).ready(function() {

    for (i = 1; i <= 100; i++){

        var object = {
            friend: friendNames[Math.floor((Math.random() * friendNames.length) + 0)],
            place: locations[Math.floor((Math.random() * locations.length) + 0)],
            wepons: wepons[Math.floor((Math.random() * wepons.length) + 0)]
        }
        acusationHeading =  $(`<h3>acusation ${i}: </h3>`).appendTo('body' ); 
        acusationHeading.click(alertH.bind(object))
    }
  
    //I need to bind the click to the heading, with the variables object so i can use it.

    function alertH (){
        alert(` I accuse ${this.friend}, with the ${this.wepons} in the ${this.place}!`)
    } 
});

   

