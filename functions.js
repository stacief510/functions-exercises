// TODO: add your solutions here!
//Q1
function combine(word1,word2){
	return 	word1 + word2;
} 
combine('pizza', 'party')

//Q2
function repeatPhrase(string, n){
	for (var i = 0; i < n; i++){
	  console.log(string);
  }
}
repeatPhrase('hello', 5);

//Q3
function toTheNthPower(num,pow){
  var total = 1;
	for (var i = 0; i < pow; i++){
	  total = total * num;
	  }	  return total;
	}

toTheNthPower(2,3);

//Q4
function areaOfACircle(radius){
var area = 3.14*(radius*radius)
console.log(area);
}
areaOfACircle(2);

//Q5
 //a2 + b2 = c2
 function PythagoreanThe(a, b){
 	var aSq = a*a
 	var bSq = b*b
	var c = aSq + bSq;
	return c;
 }

//Q6
function isXDivByY (x,y){
	while (x % y === 0)
       return true; 
} else {
	return false;
}

//Q7
function countVowels(word) {
  var vowels = ['a','e','i','o','u','y'];
  var numOfVowels = 0;
  var wordArr = word.toLowerCase().split('');
  wordArr.forEach(function(letter){
	if (vowels.indexOf(letter)!==-1){
	 numOfVowels++;
 	}
  });
  return numOfVowels;
}
countVowels('stealing');

//Q8
function doesContainWdi(array){
	var myString = 'wdi';
	for(var i = 0; i<array.length; i++){
		if (array.indexOf(myString)!==-1){
	  return true;
	  } else {
	    return false;
      } 
  }
}
doesContainWdi([9,'Bart Simpson', 'staice']);

//Q9
function findLongestWord(sentence){
	var longestIndex = 0;
	var array = sentence.split(" ");
  for (var i = 1; i<array.length; i++){
  	  if (array[i].length > array[longestIndex].length){
  	  	longestIndex = i
  }
  	return array[longestIndex];
  }
}//help
//var sentence = "The rain in Spain falls mainly on the plain"

/*Q10 
*
**
***
****
*****
print triangle above
*/
function printTriangle (length){
  var star = '';
  for (var i = 0; i< length; i++){
  star += '*';	
  console.log(star);
}
}
printTriangle(5);

//Q11



//Q12
function printPyramid(length){
	var star = ''

}


















