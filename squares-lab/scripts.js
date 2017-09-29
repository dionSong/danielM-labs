document.addEventListener("DOMContentLoaded", function() {



//Button
var addSquareBtn = document.createElement('button');
addSquareBtn.innerText = 'Add Square';
addSquareBtn.className = 'btn';
document.body.appendChild(addSquareBtn);


//Click Btn Function

addSquareBtn.addEventListener('click', createSquare);

function createSquare(){
    var newDiv = document.createElement('div');
    newDiv.className = 'square';

    
    newDiv.setAttribute('id', totalSquares.length);

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

        if (newDiv.id.previousSibling === addSquareBtn){
            alert('there isn\'t a square before the clicked square ');
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

//     * When a square is double clicked, the following should occur:
//         * If the `id` of the square is even:
//             * The square after the clicked square should be removed from the page
//             * If there isn't a square after the clicked square, display an alert indicating so
//         * If the `id` of the square is odd:
//             * The square before the clicked square should be removed from the page
//             * If there isn't a square before the clicked square, display an alert indicating so





// # IamBham - Squares Lab
// ## Due Monday 12:00pm

// ## Info
// * To practice using DOM functions, you will not write any HTML in this lab
// * You have been given a project skeleton with a basic HTML file. Do not make any changes to the body of the HTML file.
// * Create a JavaScript file and import it into your html file
// * Create a CSS stylesheet and import it into your html file

//DONE

// ## Objectives
// * When the browser first loads, create and insert a button labeled `Add Square` into the page
// * When the button is clicked, a new `div` should be added to the page
//     * The `div` should be a black square
//     * The squares should flow horizontally across the page
//         * When there is no more room, they should wrap to the next line (this will happen automatically once you get them next to each other flowing horizontally)

//DONE
//     * All of these `div` elements added to the page should share a single class name

//DONE

//     * Each `div` should have an `id` with a numerical value equivalent to the number of squares that are in the page when the `Add Square` button is clicked
//         * Ex: There are already 7 squares on the page. When the button is clicked, another square should be added to the page, and it should have `id="7"`.
//         * In this lab, you may run into scenarios where you will have multiple elements with the same `id`. It will be okay.

//DONE


//     * When hovering over a square, the value of the square's `id` should display centered in the square, and disappear when the cursor is no longer over the square
//DONE

//     * When a square is clicked, it should change to a random background color (You can randomly choose from a set of colors you predefine if you wish)

//DONE
//     * When a square is double clicked, the following should occur:
//         * If the `id` of the square is even:
//             * The square after the clicked square should be removed from the page
//             * If there isn't a square after the clicked square, display an alert indicating so
//         * If the `id` of the square is odd:
//             * The square before the clicked square should be removed from the page
//             * If there isn't a square before the clicked square, display an alert indicating so

// ## Hints
// * You will be using DOM functions to complete this portion of the lab
// * Remember that elements can be added to other elements
//     * document.body.appendChild(someElement);
//     * someElement.appendChild(someOtherElement);
// * All of the squares have the same class name
//     * You can use that to give them a uniform appearance using CSS
//     * You can also use that to find out how many squares are on the screen (think DOM function)
// Añadir comentario Contraer



