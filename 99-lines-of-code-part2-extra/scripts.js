document.addEventListener("DOMContentLoaded", function() {
    
    var friends = ['Ana', 'Agus', 'Facu', 'Eneko', 'Diego'];
    
    var mainBtn = document.createElement('button');
    var textMainButton = document.createTextNode('Work Please');
    mainBtn.appendChild(textMainButton);
    document.body.appendChild(mainBtn);
    
    mainBtn.onclick = function(){
        for(var i = 0; i < friends.length; i++) {
                var newDiv = document.createElement('div');
                var name = document.createElement('h1');
                var text = document.createTextNode(friends[i]);

                //btn
                var button = document.createElement('button');
                var btnText = document.createTextNode('SING!')
                button.appendChild(btnText);
                
                name.appendChild(text);
                newDiv.appendChild(name);
                newDiv.appendChild(button);
                document.body.appendChild(newDiv);

                button.onclick = function(){
                    for(var j = 99; j > 0; j--) {
                        if (j === 2) {
                            var para = document.createElement('p')
                            var text = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, clears it all out, ${j - 1} line of code in the file.`)
                            para.appendChild(text);
                            document.body.appendChild(para);

                            
                        } else if (j === 1) {
                            var para = document.createElement('p')
                            var text = document.createTextNode(`${j} line of code in the file, ${j} line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file.`);
                            para.appendChild(text);
                            document.body.appendChild(para);
                        } else {
                            var para = document.createElement('p')
                            var text = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, clears it all out, ${j - 1} lines of code in the file.`);
                            para.appendChild(text);
                            document.body.appendChild(para);
                        }
                    }

                }
            }
    }
            
    
    
    
});


    // var btn = document.createElement('button');
    // var text = document.createTextNode('SING!');

    // btn.appendChild(text);
    
    // var newButton = document.body.appendChild(btn);
    
    // newButton.onclick = function(){
    //     for(var i = 0; i < friends.length; i++) {
    //         var friend = friends[i]

    //         var addDiv = document.createElement('div')
    //         var heading = document.createElement('h3');
    //         var text = document.createTextNode(friend + ': ');
            
    //         addDiv.appendChild(heading)
    //         heading.appendChild(text);
    //         document.body.appendChild(addDiv);
        
    //         for(var j = 99; j > 0; j--) {
    //             if (j === 2) {
    //                 var para = document.createElement('p')
    //                 var text = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, clears it all out, ${j - 1} line of code in the file.`)
    //                 para.appendChild(text);
    //                 document.body.appendChild(para);

                    
    //             } else if (j === 1) {
    //                 var para = document.createElement('p')
    //                 var text = document.createTextNode(`${j} line of code in the file, ${j} line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file.`);
    //                 para.appendChild(text);
    //                 document.body.appendChild(para);
    //             } else {
    //                 var para = document.createElement('p')
    //                 var text = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friend} strikes one out, clears it all out, ${j - 1} lines of code in the file.`);
    //                 para.appendChild(text);
    //                 document.body.appendChild(para);
    //             }
    //         }
    //     }
    // }

    







// A button that displays all the divs with a h1 with a heading name and a buton sing. 























// ### New Objectives

// //* Put a `button` in the HTML that says `Sing!`

// * When you click the button, all the `console.log` statements from yesterday should happen. They SHOULD NOT happen before the button is clicked.

// * When you have the button setup and working correctly as described, then:

// * Delete the `div` with class `friend` and the paragraphs it contains from your html file

// * Go to your code where you are "singing the song" and change it as follows:

// * For every one of your friends, create a `div` with class `friend`

// * Put an `h3` containing your friend's name in the div

// * Then, instead of using `console.log` to put the song lyric in the console, create a paragraph for each song lyric line and put that paragraph in the `friend` div.

// * Edit your CSS. Instead of making `p` elements inside the div class `friend` uppercase, make `h3` elements uppercase

// * To Recap:

// * The page should start out just showing a button labeled Sing!

// * Nothing will be logged to the console

// * Clicking the button will cause 5 `div` elements with class name `friend` to be added to the page, one for each of your friends

// * Each div contains 99 paragraphs, each one representing a lyric line that you previously were logging to the console in part 1 of this lab.

// ## Hints

// * You will be using DOM functions to complete this portion of the lab

// * Remember that elements can be added to other elements

// * document.body.appendChild(someElement);

// * someElement.appendChild(someOtherElement);