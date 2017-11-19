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
  this.found = this.cards.map(function(card) {if (card.name.search(query) || card.phone.search(query) || card.email.search(query)) return card;});
  this.found.map(function (card) {document.write(card.name + ', ' + card.phone + ', ' + card.email + '<br>')});
};

/*
   Функція видалення запису в телефонній книзі.
*/
phoneBook.remove = function (query) {
  // Ваша магія тут
};

/*
   Функція виведення всіх телефонів.
*/
phoneBook.showTable = function () {
  // Ваша чорна магія тут
  document.write('<span>Усі контакти</span><br>'); 
  this.cards.map(function (card) {document.write(card.name + ', ' + card.phone + ', ' + card.email + '<br>')});
};
