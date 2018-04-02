// EPISODE 1
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};
printName();

//As the variable has been declared outside of the function it is a global variable
// and as such will concatonate the name variable without any issue, returning "My name is Keith"

// EPISODE 2
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

//Despite the fact that the variable 'score' has been declared outside of the 'result' function - and
//as a default global variable(due to the lack of var/let/const at the beginning) - the resulting output
//will be 3, as the variable has also been declared within the scope of the function.


// EPISODE 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

//As above we have two instances of the same variable being declared inside and outwith the function. The result
//will be the same as the above; the list will return the details of the ducks, dogs, and lions.

// EPISODE 4
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

//I believe that in this case the first line printed out will list Harvey as Suspect three, however the the second
//output will list suspect three as Keith. This is because the variable 'suspectThree' inside the 'allSuspects' function
//is not accessible outside of the 'allSuspects' function, and so we will see the global variable declaration of 'suspectThree'
//which is Keith.

//EPISODE 5
var detective = {
  name : 'Ace Ventura', //THIS IS THE GLOBAL VARIABLE OF DETECTIVE
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};                      //FUNCTION NOT CALLED YET SO WONT OUTPUT ANYTHING ABOUT ACE VENTURA

var detectiveInfo = function() {
  detective['name'] = 'Poirot' //VARIABLE DECLARED INSIDE THE FUNCTION IN WHICH PRINTNAME IS BEING CALLED
  return printName(detective);
};

console.log(detectiveInfo()); //RESULT SHOULD BE POIROT

//As the function being called is detectiveInfo which takes in a variable of detective name 'Poirot', the resulting
//output should be Poirot, regardless of the fact that we have declared 'Ace Ventura' at the top.

// EPISODE 6
var murderer = 'rick'; //GLOBAL VARIABLE

var outerFunction = function() {
  var murderer = 'marc';        //IF OUTERFUNCTION IS CALLED THEN MARC WILL BE THE MURDERER

  var innerFunction = function() {
    murderer = 'valerie';       //IF INNERFUNCTION IS CALLLED THEN VALERIA WILL BE THE MURDERER. DOES THIS NOW BECOME
  }                             //THE GLOBAL VARIABLE?

  innerFunction(); //NOT CALLING FOR A CONSOLE.LOG SO WILL NOT PRINT ANYTHING OUT
}

outerFunction(); //AGAIN NOT CALLING CONSOLE.LOG SO NO OUTPUT EXPECTED
console.log('the murderer is ', murderer); //THIS WILL STAY WITH THE INITIALLY DECLARED VARIABLE SO EXPECTING RICK

//Although both 'outerFunction' and 'innerFunction' declare their own variable of murderer (indeed innerFunction throws
//you for a loop by not having a var/let/const in front of it,) the actual functions are never called so they never initialise
//meaning that the console.log output will be 'the murderer is rick'

// EPISODE 7 - Make up your own episode/s!
// Make up your own episode which can be whatever you wish and the rest of the class will work out together
//what happened and what the output will be.

var cluedoResult = {        //Global variable declaring one killer permutation from Cluedo
  who: 'Miss Scarlett',
  where: 'The Library',
  with: 'A Revolver'
};

var outerFunction = function() { //appears to change up the location and weapon of the murder
  cluedoResult ={
    who: 'Miss Scarlett',
    where: 'The Ballroom',
    with: 'A Knife'
  };

  var innerFunction = function(){ //this is where we present another option
    var cluedoResult = {
      who: 'Miss Scarlett',
      where: 'The Study',
      with: 'A Rope'
    }
  }
  console.log(innerFunction());
};

console.log(outerFunction());

console.log(cluedoResult);
