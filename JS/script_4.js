const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Fitrer les entrepreneurs nés dans les 70
console.log("*****Fitrer les entrepreneurs nés dans les 70*****");
let seventies = entrepreneurs.filter(function(x) { return (x.year >= 1970 && x.year <= 1979); });

console.log(seventies);


// Array qui sort uniquement le prénom et le nom uniquement
console.log("*****Array qui sort uniquement le prénom et le nom uniquement*****");
let onlyNames = [];

entrepreneurs.forEach(entrepreneur => {
  onlyNames.push({first: entrepreneur.first, last: entrepreneur.last});
});

console.log(onlyNames);

// Quel age aurait chaque entrepreneur aujourd'hui (stocké dans une nouvelle colonne age de l'entrepreneur)
console.log("*****entrepreneurs avec l'age qu'ils auraient*****");
let ladate = new Date();

entrepreneurs.forEach(entrepreneur => {
  entrepreneur.age = ladate.getFullYear() - entrepreneur.year;
});

console.log(entrepreneurs);


// Trier par ordre alphabétique (noms)
console.log("*****entrepreneurs triés par nom*****");
function tri(a,b)
{
	if (a.last < b.last) return -1;
	else if (a.last == b.last) return 0;
	else return 1;
}
entrepreneurs.sort(tri);

// On affiche le résultat du filtre
console.log(entrepreneurs);
