let starSigns = ['Taurus', 'Gemini', 'Cancer', 'Leo']; 
console.log(starSigns);
starSigns.push('Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn','Aquarius');
console.log(starSigns);
starSigns.unshift('Aries');
console.log(starSigns);
starSigns.push('Pisces');
console.log(starSigns);

//Search Capricorn return your index
console.log(starSigns.indexOf('Capricorn'));

//Verify if Capricorn exist inside array
console.log(starSigns.includes('Capricorn'));

const fireSigns = [
    {id: 1, sign: 'Aries'},
    {id: 2, sign: 'Leo'},
    {id: 3, sign: 'Sagittarius'}
];

//When is an array with objects include return false
console.log(fireSigns.includes({id: 1, sign: 'Aries'}));

//When we use find with a function the object inside array is found
console.log(fireSigns.find(function(fire) {
    return fire.sign == 'Aries';
}));
   
//Using arrow function
console.log(fireSigns.find(fire => fire.sign == 'Aries'));

//Remove the last element in an array
let lastItem = starSigns.pop();
console.log(lastItem);

//Remove the first element of an array
let firstItem = starSigns.shift();
console.log(firstItem);

//Use splice to remove one or more itens placing by index 
console.log(`Get out of here: `, starSigns.splice(5, 1));
console.log(starSigns);

//Clear an array with length or splice
starSigns.length = 0;
starSigns.splice(0, starSigns.length);
console.log(starSigns);