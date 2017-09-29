document.addEventListener("DOMContentLoaded", function() {
    
    var friends = ['Ana', 'Agus', 'Facu', 'Eneko', 'Diego'];
    
    var btn = document.createElement('button');
    var text = document.createTextNode('SING!');

    btn.appendChild(text);
    
    var newButton = document.body.appendChild(btn);
    
    newButton.onclick = function(){
        for(var i = 0; i < friends.length; i++) {
            var friend = friends[i]

            var addDiv = document.createElement('div')
            var heading = document.createElement('h3');
            var text = document.createTextNode(friend + ': ');
            
            addDiv.appendChild(heading)
            heading.appendChild(text);
            document.body.appendChild(addDiv);
        
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
});
