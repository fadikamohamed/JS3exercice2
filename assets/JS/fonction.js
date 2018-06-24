//Déclaration de la variable hideEffect
hideEffect = document.getElementById('masquer');
//Assignation de la fonction hideText sur l'évenement hideEffect
hideEffect.addEventListener('click',hideText);
//Déclaration de la variable showEffect
showEffect = document.getElementById('afficher');
//Assignation de la fonction showText a la variable showEffect
showEffect.addEventListener('click',showText);

//Déclaration dea fonction hideText
function hideText() {
  //Masquage de la div text
  hideText = document.getElementById('text').style.visibility = 'hidden';
}
//Déclaration de lal fonction showText
function showText() {
  //Affichage de la div text
  showText = document.getElementById('text').style.visibility = 'visible';
}
