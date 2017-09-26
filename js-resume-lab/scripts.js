
//Name
var name = 'name: daniel martinez';
    console.log(name.toUpperCase())

//Career
console.log('Career: Front End Developer / Digital Marketer');
console.log('Description: I like video games');

//Interests
var myInterest = ['coding', 'video games', 'tv series'];
console.log('My Interests are: ' + myInterest);

//Experience
function displayPosition(companyName, jobTitle, description){
    console.log(jobTitle + ',' + ' ' + description + ' at ' + companyName);
}

console.log('My Experience:');
displayPosition('Bankity', 'Digital Marketing', 'SEO, ASO, Content Marketing');

//Skills
function displaySkill(skillName, boolean){
    if (boolean === true) {
        console.log('* Check It: ' + skillName);
    }
    else {
        console.log('* ' + skillName);
    }
}

console.log('My Skills:');
displaySkill('html', true);
displaySkill('css', true);
displaySkill('javascript', true);
displaySkill('Google Analytics', true);
displaySkill('SEO', true);
displaySkill('ASO', true);
displaySkill('Content Marketing', false);
displaySkill('Facebook ads', false);
displaySkill('PSD', false);








