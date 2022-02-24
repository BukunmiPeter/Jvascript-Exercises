function CelsiusToFahrenheit(NNoC) {
   NNoF= ((9/5)*NNoC +32);
return NNoF
}
console.log(CelsiusToFahrenheit(100))




function FahrenheitToCelcius(NNof) {
   NNoc= ((5/9)*(NNof -32));

return NNoc
}
console.log(FahrenheitToCelcius(212))



//The rule is that if the year is divisible by 100 and not divisible by 400, leap year is skipped.
// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }

function leapyear(year){

if (((year%4==0) && (year%100!= 0)) || (year%400==0)){
   console.log(`${year} is leap year`)
}
else {
   console.log(`${year} is not leap year`)
}
}
leapyear(200)









const programming = {
   languages: ["JavaScript", "Python", "Java"],
   isChallenging: true,
   isRewarding: true,
   difficulty: 8,
}

console.log(typeof(programming))

language = programming['languages']
language.push('Ruby')
console.log(language)

programming['difficulty']= 7

console.log(programming['difficulty'])


programming['isFun']= true



console.log(programming)



for( i= 0; i<language.length; i++){
console.log(language[i])
}

const A = Object.keys(programming)
const Arrkeys = []
Arrkeys.push(A)
console.log(Arrkeys)

 for( i= 0; i<5; i++){
  console.log(Arrkeys[0][i])
}

const B = Object.values(programming)
const ArrValues = []
ArrValues.push(B)
console.log(ArrValues)

 for( i= 0; i<5; i++){
  console.log(ArrValues[0][i])
}


function palindrome(str) {
   let re = /[\W_]/g;
   let lowRegStr = str.toLowerCase().replace(re, '');
   let reverseStr = lowRegStr.split('').reverse().join(''); 
   console.log( reverseStr === lowRegStr)
   return  reverseStr === lowRegStr
 }
 palindrome("0_0 (: /-\ :) 0–0");   




 
