//Generar firma
const descName = document.getElementById('descName');
const descJob = document.getElementById('descJob');
const descTel = document.getElementById('descTel');
const urlLink = document.getElementById('enlaceLink');
const imgAvatar = document.getElementById('avatar');

function save(event) {
  event.preventDefault(); 
  const data = {
      name: document.getElementById('nameField').value,
      desc: document.getElementById('description').value,
      teleph: document.getElementById('teleph').value,
      linked: document.getElementById('linked').value,
      photo: document.getElementById('photo').value,
  }
    descName.innerText = data.name;
    descJob.innerText = data.desc;
    descTel.innerText = data.teleph;
    urlLink.href = data.linked;
    
    updateImg();
}
const btn = document.querySelector('.section-form__wrapper--btn');
btn.addEventListener('click', save);

//Elegir la imagen de avatar

const women = ['woman1', 'woman2', 'woman3', 'woman4'];
const mens = ['man1', 'man2', 'man3', 'man4'];
let checkWomen = document.getElementById('checkwoman');
let checkMens = document.getElementById('checkman');

function updateImg() {
  let numRandom = Math.floor(Math.random() * 4);
  if(checkWomen.checked === true) {
    let randomImg = women[numRandom];
    imgAvatar.src = `./img/${randomImg}.gif`;
  } else {
    let randomImg = mens[numRandom];
    imgAvatar.src = `./img/${randomImg}.gif`;
  }
}

//Separar teléfono
document.querySelector('#teleph').addEventListener('keydown', (e) => {
  e.target.value = e.target.value.replace(/(\d{3})(\d{2})(\d{2})(\d+)/g, '$1 $2 $3 $4');
});

// Seleccionar firma (ahora hay que crear el modal) //
function copySignature() {
  let range = document.createRange();
  range.selectNode(document.querySelector('.results-wrapper'));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  openModal();
}
const btnCopy = document.querySelector('.results__btn');
btnCopy.addEventListener('click', copySignature);

//Abrir modal de copiar firma
function openModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('modal-open');
}

//Cerrar modal
function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('modal-open');
}
const closeElement = document.querySelector('.wrapper-modal__close');
closeElement.addEventListener('click', closeModal);




 