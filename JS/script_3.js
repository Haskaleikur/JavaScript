// Un prompt s'affiche avec la question suivante
let etages = Number(prompt("Combien d'étages souhaites-tu ?"));

console.log(`Votre pyramide de ${etages} étages`);

// Fonction qui permet de créer un étage (car on ne peut pas mulitplier une chaine de caratère par un nombre)
function create_etage (n, etages) {
  let etage = "";
  for(let count = 0; count <=etages-n; count++){
    etage+= " ";
  }
  for(let count = 0; count <=n; count++){
    etage+= "#";
  }
  return etage;
}

// Fonction qui va créer la pyramide demandée
function half_pyramid (etages) {
  let pyramide = [];
  let n = 1;
  while (n <= etages) {
    pyramide.push(create_etage((n-1),etages));
    n+=1;
  }
  return pyramide;
}

// On créé une pyramique avec le nombre d'étages demandés par l'utilisateur
pyramid = half_pyramid (etages)

// On affiche la pyramide
pyramid.forEach(etage => {
  console.log(etage)
});
