document.addEventListener("DOMContentLoaded", function() {

//Add Square Btn
var squareBtn = document.createElement('button');
var spanBtn = document.createElement('span');
squareBtn.className = 'btn';
spanBtn.innerText = 'Add a Square!';


squareBtn.appendChild(spanBtn);
document.body.appendChild(squareBtn);

//Btn On Click Create a Div
squareBtn.addEventListener('click', createDiv);

    function createDiv(){
        var newDiv = document.createElement('div');
        newDiv.className = 'square';

        //Push to the array before .length
        totalSquares.push(newDiv);
        newDiv.id = totalSquares.length;

        document.body.appendChild(newDiv);

        //On Hover show ID
        newDiv.addEventListener('mouseover', showId);
        newDiv.addEventListener('mouseout', hideId);
        
        function showId(){
            newDiv.innerText = newDiv.id;
        }
        
        function hideId(){
            newDiv.innerText = ' ';
        }

        //Div On Click change Color
        newDiv.addEventListener('click', changeColor);

        function changeColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
                newDiv.style.backgroundColor = color;
            }
        }

        //Div on Double Click Remove Squares
        newDiv.addEventListener('dblclick', removeSquare);

        function removeSquare(){
            if (newDiv.id % 2 === 0 && newDiv.nextSibling != null)
                newDiv.nextElementSibling.remove();
            else if (newDiv.id % 2 === 1 && newDiv.previousSibling != squareBtn)
                newDiv.previousElementSibling.remove();
            else if (newDiv.nextSibling === null)
                alert('there isn\'t a square after');
            else if (newDiv.previousSibling === squareBtn)
                alert('there isn\'t a square before');
        }    
    }

});

var totalSquares = [];













