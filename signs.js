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

console.log(fireSigns.includes({id: 1, sign: 'Aries'}));


console.log(fireSigns.find(function(fire) {
    return fire.sign == 'Aries';
}));
   
