
var friends = ['Ana', 'Agustin', 'Facundo', 'Eneko', 'Juan'];

for (a = 0; a <= 4; a++){
    console.log(friends[a] + ':');
    for (i = 99; i > 0; i--){
         console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[a] + ' strikes one out, clears it all out, ' + (i - 1 ) + ' lines of code in the file');
    }
    if (i === 1){
        console.log(i + ' line of code in the file, ' + i + ' line of code; ' + friends[a] + ' strikes one out, clears it all out, no more lines of code in the file');
    }
}      

