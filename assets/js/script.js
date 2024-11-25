const btn = document.querySelector('.btn');
const addPlayerForm = document.querySelector('.nonn');
const btnCancel = document.querySelector('.btn-cancel');


btn.addEventListener('click', () => {
   addPlayer();

});

btnCancel.addEventListener('click',()=>{
    addPlayerForm.classList.remove('nonn1');
  addPlayerForm.classList.add('nonn');
  btnCancel.classList.remove('btn-cancel1')
  btnCancel.classList.add('btn-cancel')
  btn.classList.remove('btn1')
  btn.classList.add('btn')

})

function addPlayer(){
  addPlayerForm.classList.remove('nonn');
  addPlayerForm.classList.add('nonn1');
  btnCancel.classList.remove('btn-cancel')
  btnCancel.classList.add('btn-cancel1')
  btn.classList.remove('btn')
  btn.classList.add('btn1')

}
