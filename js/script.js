// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
 $("button").click(function(){ 
    sentenceToPigLatin() 
 
 });

      
   

});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

function sentenceToPigLatin() {
        console.log("Im here");
 	      var message=$("input").val();
 	     // var pigMessage = ay(message);
       // $("#message").text(pigMessage);
          var split= message.split(' ');
 	 
 	 for(var count=0; count<split.length; count=count+1){   
 	    var pigMessage = ay(split[count]);
        $("#message").append(pigMessage);
       
   }
 
 
}

    
function ay(word){
var firstLetter = word.slice(0,1);
var lastLetter = word.slice(1,word.length);
if (firstLetter=='a'||firstLetter=='e'||firstLetter=='i'||firstLetter=='o'||firstLetter=='u'){ 
 return  word + "ay ";    
}else {
 return lastLetter + firstLetter + "ay ";
}
}




// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance

