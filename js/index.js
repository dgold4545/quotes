document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    'Начальник не завжди правий, але він завжди начальник.',
     'Час, витрачений на обговорення проблеми обернено пропорційно значущості проблеми.',
     'Якщо потрібно терміново зробити якусь справу, зверніся до того, хто зайнятий найбільше.',
     'Не поспішай виконувати наказ — його можуть скасувати.',
     'Тому, хто сам нічого не робить, все здається по плечу.',
     'Начальник - це людина, яка приходить на службу пізно, коли ти приходиш рано, і з\'являється на світ, коли ти спізнюєшся.',
     'Тільки коли читаєш роз\'яснення раніше отриманої інструкції, здогадуєшся, що не зрозумів ні самої інструкції, ні роз\'яснень до неї.',
     'Якщо відкласти справу надовго, його або виконає хтось інший, або вона взагалі перестане бути нужным.',
     'Не будь незамінним - тебе ніколи не підвищать.',
     'Позаду кожного, хто зробив успішну кар\'єру, стоїть спантеличена жінка.',
  ];

  const colors = [
    '#CC0000',
    '#FF6600',
    '#FF3366',
    '#9933CC',
    '#003333',
    '#708090',
  ];

  let currentSlideIndex = 0;
  let slideElements;

  const startSlider = event => {
    event.stopPropagation();
    event.currentTarget.classList.add('hide');
    initializeSlider();
  };

  const initializeSlider = () => {
    const sliderContainer = document.querySelector('body');
    for (let i = 0; i < quotes.length; i++) {
      let slide = document.createElement('div');
      slide.classList.add('slide');
      if (i !== 0) slide.classList.add('hide');
      if (i === 0)
        slide.style.background = colors[getRandomInteger(0, colors.length - 1)];
      let text = document.createElement('div');
      text.textContent = quotes[i];
      slide.append(text);
      sliderContainer.append(slide);
    }
    sliderContainer.addEventListener('click', showNextSlide);
    slideElements = document.querySelectorAll('.slide');
  };

  const showNextSlide = event => {
    hideCurrentSlide(currentSlideIndex);
    currentSlideIndex = (currentSlideIndex + 1) % quotes.length;
    showSlide(currentSlideIndex);
  };

  const showSlide = index => {
    slideElements[index].classList.remove('hide');
    slideElements[index].style.background =
      colors[getRandomInteger(0, colors.length - 1)];
  };

  const hideCurrentSlide = index => {
    slideElements[index].classList.add('hide');
  };

  const getRandomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  document.querySelector('.btn-start').addEventListener('click', startSlider);
});




function checkBrackets(str) {
    const stack = [];
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let char of str) {
        if (char in brackets) {
            // Если это открывающая скобка, добавляем её в стек
            stack.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
            // Если это закрывающая скобка, проверяем её парность
            const lastBracket = stack.pop();
            if (!lastBracket || brackets[lastBracket] !== char) {
                // Если стек пуст или скобка не соответствует последней открытой
                return false;
            }
        }
    }

    // Если стек не пустой после проверки всех символов, значит есть незакрытые скобки
    return stack.length === 0;
}

// Пример использования
const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

console.log(checkBrackets(someFn)); // Вернет true, все скобки закрыты правильно
