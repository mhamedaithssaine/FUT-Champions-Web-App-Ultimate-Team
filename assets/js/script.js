// affiche et masquer de formulaire 
const btnAjouter = document.querySelector('.btn-ajouter');
const formulaire = document.querySelector('.nonn');
const btnCancel = document.querySelector('.btn-cancel');


btnAjouter.addEventListener('click', () => {
   afficheForme();

});

//pour annuller le forme

btnCancel.addEventListener('click',()=>{
    formulaire.classList.remove('nonn1');
  formulaire.classList.add('nonn');
  btnCancel.classList.remove('btn-cancel1')
  btnCancel.classList.add('btn-cancel')
  btnAjouter.classList.remove('btn1')
  btnAjouter.classList.add('btn')

});

//pour affichage de forme

function afficheForme(){
  formulaire.classList.remove('nonn');
  formulaire.classList.add('nonn1');
  btnCancel.classList.remove('btn-cancel')
  btnCancel.classList.add('btn-cancel1')
  btnAjouter.classList.remove('btn')
  btnAjouter.classList.add('btn1')

}
// affiche et masquer formulaire specifique en fonction de la position choisie

document.getElementById("PositionPlayer").addEventListener("change",function(){
  const selectPosition = this.value;
  const principalStatique = document.getElementById("principalStatique")
  const gardianStatique = document.getElementById("gkStatique")

  if(selectPosition === "GK"){
    gardianStatique.style.display="block";
    principalStatique.style.display="none";
  }else {
    gardianStatique.style.display="none";
    principalStatique.style.display="block";
  }

  console.log(selectPosition);
});


//fonction pour ajouter un joueur et recuperation des donner 

//fonction de validation de formulaire 
function validationForme(){
  const namePlayer = document.getElementById("playerName");
  const photoPlayer = document.getElementById("photoPlayer");
  const positionPlayer = document.querySelector(".positionPlayerid");
  const nationalityPlayer = document.getElementById("nationalityPlayer");
  const DraeuNational = document.getElementById("DraeuNational");
  const clubPlayer = document.getElementById("clubPlayer");
  const logoClub = document.getElementById("logoClub");
  const ratingPlayer = document.getElementById("ratingPlayer");




}