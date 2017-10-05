
 var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tainnate eate tea anne inant nean', 'itant eate anot eat nato inate eatanot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

var upper,
lower,
trueKey;


// A $( document ).ready() block.
$(document).ready(function() {
    //Hide Upper Keyboard
    upper = $("#keyboard-upper-container");
    lower = $("#keyboard-lower-container");

    upper.hide();

     $(document).on('keyup keydown', function(e) {
         if(e.which === 16 && e.type === 'keyup'){
           upper.hide();
           lower.show();
           

          } else if (e.which === 16 && e.type === 'keydown'){
                upper.show();
                lower.hide();
                
          }
       
       var trueKey = e.which;
     if (e.type === "keydown" && e.which != 32){
           $("#" + (e.which + 32)).css("background-color", "red");
       }
        

       
       
    //    var pressedKey = e.which;
    //    if(e.type === "keydown" && e.which === 32) {
    //          $("#32").css("background-color", "#bdc3c7");
    //    } else if(e.type === 'keydown'){
    //        $("#" + (pressedKey + 32)).css("background-color", "#bdc3c7");
    //    } else{
    //         $("#" + (pressedKey + 32)).css("background-color", "#f5f5f5");
    //         $("#32").css("background-color", "#f5f5f5");  
    //    }
        
       

        // $("#" + keyPressed).css("background-color", "red");
        // $('#' + trueCode).css('background-color', 'pink');
       
       //encontrar el keycode y encontrar el span con ese id y cambiarle el background color

    });
     
});









   
   
   
   






// * The sentences in the provided array should be displayed at the top of the page one sentence at a time. Once the sentence has been completed, the next in line should appear. There is already a div with id="sentence" in your html file. This is where you will display the sentences one at a time.





// * You should highlight the currently expected letter in the on-screen sentence that should be typed next

// * You can use the div with id="yellow-block" and nudge it along a fixed number of pixels if you'd like

// * Hint: if you don't want to use the animation to do the yellow block then you might want to use backgroundColor on the text (var sentence = 'hello'; var sentenceArray = sentence.split(''); then loop through and create spans for each letter, with an id, and then you can set a background color on each span).

// * Remember to reset it back to the beginning of the sentence when you move to the next sentence

// * If you can think of another way of doing this, then go for it!

// * Also display the currently expected letter in the center (div id="target-letter" provided for you)

// * For each sentence, show a visual "log" of right/wrong per character by inserting one of the following into the div with id="feedback":

// * If the correct key is pressed, indicate with a green check.

// * If the correct key is not pressed, indicate with a red X.

// * At the end of each sentence, clear out the feedback div

// * The user's words per minute should be calculated and displayed on the screen when you reach the end of the last sentence.

// * Can be calculated by: `numberOfWords / minutes - 2 * numberOfMistakes`

// * For number of words, you can just count how many words make up the sentences you were given and hard code that value.

// * There should be a delay so the user can see the score. Then ask them if they would like to play again.

// * If confirmed yes, reset the game back to the start.

// * If no, leave as is.

// ## Hints

// * To succeed in this exercise, you need to keep track of:

// * Which sentence the user is on

// * Which letter of that sentence the user is on

// * For the feedback green checks and red X, you may use Bootstrap glyphicons for 'ok' and 'remove'.

// * While this exercise definitely seems like it should use loops (and perhaps even a nested loop), you will not use a loop at all.

// * Loops are automatic and very fast

// * Think logically about how to move through the sentence array, and through each sentence character-by-character.

// * Let user input be the "driving force" of your program.