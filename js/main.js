$(document).ready(function () {
  const counter = $('.counter'); // элемент для установки этажа
  const counterUp = $('.counter-button-up'); // кнопка вверх
  const counterDown = $('.counter-button-down'); // кнопка вниз
  const homeImagePathElem = $('.home-image path'); // svg каждого элемента

  let currentFloor = 2; // текущий этаж

  // при наведении мышкой
  homeImagePathElem.on('mouseover', function () { 
    homeImagePathElem.removeClass('current-floor'); // удаляем активный класс у всех этажей
    currentFloor = $(this).attr('data-floor'); // ищем текущий
    counter.text(currentFloor); //записываем значение эатажа в счетчик
  });

  // обновляем подстветку этажа
  const updateFloor = (floor) => {
    // дополнительная проверка для того, чтобы не делать ту же работу несколько раз
    if (floor <= 18 && floor >= 2) {
      let usfloor = floor.toLocaleString('en-US', { 
        minimumIntegerDigits: 2,
        useGrouping: false
      }); // установка форматирования текста для вывода в поле counter
      counter.text(usfloor); // установка форматированного текста
      homeImagePathElem.removeClass('current-floor'); // удаление активного класса
      $(`[data-floor=${usfloor}]`).toggleClass('current-floor'); // устанавливаем активный атрибут тому элементу, на который показывает счетчик
    }
  }

  // увеличиваем этаж
  counterUp.on('click', () => updateFloor(currentFloor < 18 ? ++currentFloor : currentFloor));

  // уменьшаяем этаж  
  counterDown.on('click', () => updateFloor(currentFloor > 2 ? --currentFloor : currentFloor));

});