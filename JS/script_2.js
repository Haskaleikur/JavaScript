// Un prompt s'affiche avec la question suivante
let number = Number(prompt("De quel nombre veux-tu calculer la factorielle ?"));
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
function factorial(n) {

  if (n==0) {
    { return 1; }
  } else {
    { return n * factorial( n - 1 ); }
  }

}

console.log(`"Le résultat est : ${factorial(number)}`);
