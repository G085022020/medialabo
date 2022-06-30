let eu = document.querySelector('li#EU');
eu.remove(); //要素の削除

let ul = document.querySelector('ul');
let li;
li = document.createElement('li'); 
li.textContent = 'アジア大陸'; 
ul.insertAdjacentElement('beforeend', li); //liを追加

li = document.createElement('li');
li.textContent = 'ヨーロッパ大陸'; 
ul.insertAdjacentElement('beforeend', li);


let h2sevenOcean = document.querySelector('h2#sevenOcean');

let oceans = [
    '北極海',
    '北大西洋',
    '南大西洋',
    'インド洋',
    '北太平洋',
    '南太平洋',
    '南極海'
  ]

ul = document.createElement('ul');
ul.insertAdjacentElement('beforeend', ul);

for (let o of oceans){
    li = document.createElement('li');
    li.textContent = o;
    ul.insertAdjacentElement('beforeend',li);
}
