document.addEventListener("DOMContentLoaded", function() {



//Button
var addSquareBtn = document.createElement('button');
var innerSpan = document.createElement('span');
innerSpan.innerText = 'Add Square!';

addSquareBtn.appendChild(innerSpan);
//addSquareBtn.innerText = 'Add Square';
addSquareBtn.className = 'btn';
document.body.appendChild(addSquareBtn);


//Click Btn Function

addSquareBtn.addEventListener('click', createSquare);

function createSquare(){
    var newDiv = document.createElement('div');
    newDiv.className = 'square';

    
    newDiv.setAttribute('id', totalSquares.length + 1);

    document.body.appendChild(newDiv);
    totalSquares.push(newDiv); 

    //Hover Function
        newDiv.addEventListener('mouseover', mouseOverFunction);
        function mouseOverFunction(){
            newDiv.innerText = newDiv.id;
            
        }
    //Unhover Function   
        newDiv.addEventListener('mouseout', mouseOutFunction);
        function mouseOutFunction(){
            newDiv.innerText = ' ';
        }

    // One Click div function
        newDiv.addEventListener('click', function(){
            newDiv.style.backgroundColor = getRandomColor();
        });

    //Double Click div function
        newDiv.addEventListener('dblclick', function(){

        if (newDiv.previousElementSibling === addSquareBtn){
            alert('there isn\'t a square before the clicked square ');
        }
         else if (newDiv.nextElementSibling === null && newDiv.id % 2 === 0){
            alert('there isn\'t a square after the clicked square ');
        }
        
        //even
        else if (newDiv.id % 2 === 0){
        newDiv.nextSibling.remove();
        }
        //odd
        else if (newDiv.id % 2) {
        newDiv.previousSibling.remove();
        }   
        
            
        })
}
// array.splice(index, 1);
});

//Get Random Color Function
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 

//Total Squares Array
var totalSquares = [];
