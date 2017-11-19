var phoneBook; // Тут ви зберігаєте записи як хочете
phoneBook = {cards: [], found: []};
/*
   Функція додавання запису в телефонну книгу.
*/
phoneBook.add = function (name, phone, email) {
  // Ваша неймовірна магія тут
  this.cards.push({name, phone, email});
};

/*
   Функція пошуку записв в телефонній книзі.
   Пошук ведеться по всім полям.
*/
phoneBook.find = function (query) {
  // Ваша магія тут
  document.write('<span>Знайдені контакти</span><br>'); 
  phoneBook.cards.map(function(card) {if (card.name.search(query) != -1 || card.phone.search(query) != -1 || card.email.search(query) != -1) phoneBook.found.push(card);});
  phoneBook.found.map(function (card) {document.write(card.name + ', ' + card.phone + ', ' + card.email + '<br>')});
};

/*
   Функція видалення запису в телефонній книзі.
*/
phoneBook.remove = function (query) {
  // Ваша магія тут
  var countRem = 0;
  phoneBook.cards.forEach(function(card, i) {if (card.name.search(query) != -1 || card.phone.search(query) != -1 || card.email.search(query) != -1) {phoneBook.cards.splice(i, 1); countRem++;}});
  document.write('Вилучений ' + countRem + ' контакт/ів <br>');
};

/*
   Функція виведення всіх телефонів.
*/
phoneBook.showTable = function () {
  // Ваша чорна магія тут
  document.write('<span>Усі контакти</span><br>'); 
  // this.cards.map(function (card) {document.write(card.name + ', ' + card.phone + ', ' + card.email + '<br>')});
  document.write('<table>');
  this.cards.map(function (card) {document.write('<tr><td>' + card.name + '</td><td>' + card.phone + '</td><td>' + card.email + '</td></tr>')});
  document.write('</table>');
};
