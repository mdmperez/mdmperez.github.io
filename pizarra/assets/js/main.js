'use strict';

let table = document.querySelector('#table');
let inputTable = document.querySelector('#input-table');

function writePenalty() {
    event.preventDefault();
    clearTable();

    for (let i = 0; i < 30; i++) {
        let textRepeat = inputTable.value;
        const newLi = document.createElement('LI');
        const newContent = document.createTextNode(textRepeat);
        table.appendChild(newLi);
        newLi.appendChild(newContent);
        newLi.classList.add('section-blackboard__content-table--item');
    }

    inputTable.value = '';
}

function clearTable() {
    table.innerHTML = '';
}

let btnTable = document.querySelector('#btn-table');
btnTable.addEventListener('click', writePenalty);

