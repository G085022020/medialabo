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