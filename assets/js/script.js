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
function updatePlayerCard() {

  const playerName = document.getElementById('playerName').value;
  const photoPlayer = document.getElementById('photoPlayer').value;
  const positionPlayer = document.getElementById('PositionPlayer').value;
  const nationality = document.getElementById('nationalityPlayer').value;
  const nationalFlag = document.getElementById('DrapeuNational').value; 
  const club = document.getElementById('clubPlayer').value;
  const logoClub = document.getElementById('logoClub').value; 
  const rating = document.getElementById('ratingPlayer').value;
  const pace = document.getElementById('pace').value;
  const shooting = document.getElementById('shooting').value;
  const passing = document.getElementById('passing').value;
  const dribbling = document.getElementById('dribbling').value;
  const defending = document.getElementById('defending').value;
  const physical = document.getElementById('physical').value;
  const diving = document.getElementById('diving').value;
  const handling = document.getElementById('handling').value;
  const kicking = document.getElementById('kicking').value;
  const reflexes = document.getElementById('reflexes').value;
  const speed = document.getElementById('speed').value;
  const positioning = document.getElementById('positioning').value;
// objet pour local storage
  const lesDonnerDeJoueur = {
    playerName,
    photoPlayer,
    positionPlayer,
    nationality,
    nationalFlag,
    club,
    logoClub,
    rating,
    stats: {
      pace,
      shooting,
      passing,
      dribbling,
      defending,
      physical,
      diving,
      handling,
      kicking,
      reflexes,
      speed,
      positioning
    }
  };
  localStorage.setItem(`player_${positionPlayer}`, JSON.stringify(lesDonnerDeJoueur))


  //  la carte correspondant de la position du joueur
  let card;
  switch (positionPlayer) {
    case "GK": card = document.getElementById('cardrush11gk'); break;
    case "RB": card = document.getElementById('cardrush10rb'); break;
    case "LB": card = document.getElementById('cardrush7lb'); break;
    case "CB1": card = document.getElementById('cardrush9cb1'); break;
    case "CB2": card = document.getElementById('cardrush8cb2'); break;
    case "SA": card = document.getElementById('cardrush2sa'); break;
    case "LW": card = document.getElementById('cardrush1lw'); break;
    case "RW": card = document.getElementById('cardrush3rw'); break;
    case "CM": card = document.getElementById('cardrush5cm'); break;
    case "MR": card = document.getElementById('cardrush6mr'); break;
    case "ML": card = document.getElementById('cardrush4ml'); break;
    default:
      alert("Position non reconnue !");
      return;
  }

  // Vérification si la carte existe
  if (!card) {
    console.error("Aucune carte disponible pour cette position !");
    return;
  }

 
  card.querySelector('.nameGK, .nameRB, .nameCB1, .nameCB2, .nameLB, .nameCM, .nameMR, .nameML, .nameLW, .nameRW, .nameSA').textContent = playerName;
  card.querySelector('.RatingGK, .RatingRB, .RatingCB1, .RatingCB2, .RatingLB, .RatingCM, .RatingMR, .RatingML, .RatingLW, .RatingRW, .RatingSA').textContent = rating;
  card.querySelector('.valuePositionGK, .valuePositionRB, .valuePositionCB1, .valuePositionCB2, .valuePositionLB, .valuePositionCM, .valuePositionMR, .valuePositionML, .valuePositionLW, .valuePositionRW, .valuePositionSA').textContent = positionPlayer;
//photo de joueur

card.querySelector('.imgGK').src = photoPlayer;

  //flag nationale
  const flagDiv = card.querySelector('.DrapeuNational'); 
  if (flagDiv) {
    flagDiv.innerHTML = `<img src="${nationalFlag}" alt="Drapeau de ${nationality}" style="width: 100%; height: auto;">`;
  }
  

  //logo du club
  const logoDiv = card.querySelector('.logoClub'); 
  if (logoDiv) {
    logoDiv.innerHTML = `<img src="${logoClub}" alt="Logo du club ${club}" style="width: 100%; height: auto;">`;
  }
 
  const statsContainer = card.querySelector('.statiqueValueGK, .statiqueValueRB, .statiqueValueCB1, .statiqueValueCB2, .statiqueValueLB, .statiqueValueCM, .statiqueValueMR, .statiqueValueML, .statiqueValueLW, .statiqueValueRW, .statiqueValueSA');
  
  if (positionPlayer === "GK") {
    statsContainer.querySelector('.diving').textContent = diving;
    statsContainer.querySelector('.handling').textContent = handling;
    statsContainer.querySelector('.kicking').textContent = kicking;
    statsContainer.querySelector('.reflexes').textContent = reflexes;
    statsContainer.querySelector('.speed').textContent = speed;
    statsContainer.querySelector('.positioning').textContent = positioning;
  } else {
    statsContainer.querySelector('.pace').textContent = pace;
    statsContainer.querySelector('.shooting').textContent = shooting;
    statsContainer.querySelector('.passing').textContent = passing;
    statsContainer.querySelector('.dribbling').textContent = dribbling;
    statsContainer.querySelector('.defending').textContent = defending;
    statsContainer.querySelector('.physical').textContent = physical;
  }
}






// fonction de validation de formulaire 
function validationForme(){

  const playerName = document.getElementById('playerName');
  const photoPlayer = document.getElementById('photoPlayer');
  const positionPlayer = document.getElementById('PositionPlayer');
  const nationalityPlayer = document.getElementById('nationalityPlayer');
  const drapeuNational = document.getElementById('DrapeuNational');
  const clubPlayer = document.getElementById('clubPlayer');
  const logoClub = document.getElementById('logoClub');
  const ratingPlayer = document.getElementById('ratingPlayer');

  const pace = document.getElementById('pace');
  const shooting = document.getElementById('shooting');
  const passing = document.getElementById('passing');
  const dribbling = document.getElementById('dribbling');
  const defending = document.getElementById('defending');
  const physical = document.getElementById('physical');

  const diving = document.getElementById('diving');
  const handling = document.getElementById('handling');
  const kicking = document.getElementById('kicking');
  const reflexes = document.getElementById('reflexes');
  const speed = document.getElementById('speed');
  const positioning = document.getElementById('positioning');


}