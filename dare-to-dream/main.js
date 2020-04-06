'use strict';

const btnShow = document.querySelector('.section-stars__content-follow--text');

function showMore() {
    const titlePpal = document.querySelector('.section-stars__content-title--title');
    titlePpal.classList.add('hide');
    btnShow.classList.add('hide');

    const section2 = document.querySelector('.section-to-do');
    section2.classList.remove('hide');
}

btnShow.addEventListener('click', showMore);

const input = document.getElementById('dreams');
const ulList = document.querySelector('.section-to-do__list');

function showDreams() {
    if(input.value === '') {
        const contentMsg = document.querySelector('.section-to-do__content-msg');
        contentMsg.classList.remove('section-to-do__content-msg');
        contentMsg.classList.add('show-msg');

        const removeMsg = () => {
            contentMsg.classList.remove('show-msg');
            contentMsg.classList.add('section-to-do__content-msg');
          };
          setTimeout(removeMsg, 6000);

        function closeTooltip() {
        const close = event.currentTarget;
        close.parentElement.classList.remove('show-msg'); 
        close.parentElement.classList.add('section-to-do__content-msg'); 
        }

        const closeElement = document.querySelector('.section-to-do__content-msg--close');
        closeElement.addEventListener('click', closeTooltip);
        
    } else {
        let li = document.createElement('LI'); 
        let headerDream = document.createElement('HEADER');
        let contentChecks = document.createElement('DIV'); 
        headerDream.innerHTML = input.value ;
    
        const inputCheck = document.createElement("INPUT");
        inputCheck.setAttribute("type", "checkbox");
            
        let closeElement = document.createElement('A');
        closeElement.setAttribute('href', '#');
        closeElement.innerHTML= '&#10008;';
    
        ulList.appendChild(li); 
        li.appendChild(headerDream); 
        li.appendChild(contentChecks); 
        contentChecks.appendChild(inputCheck);
        contentChecks.appendChild(closeElement);
    
        input.value = '';
    
        function dreamChecked() {
            if(inputCheck.checked === true) {
                headerDream.classList.toggle('completed');
            } else if (inputCheck.checked === false) {
                headerDream.classList.remove('completed');
            }
        }
    
        inputCheck.addEventListener('change' , dreamChecked);
        
        function clearDream() {
            closeElement.parentElement.parentElement.remove();
        }
        closeElement.addEventListener('click', clearDream);
    }
    
}
 
const btn = document.querySelector('.section-to-do__btn');
btn.addEventListener('click', showDreams);




