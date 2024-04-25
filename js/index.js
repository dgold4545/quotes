document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    'Начальник не всегда прав, но он всегда начальник.',
    'Время, затраченное на обсуждение проблемы обратно пропорционально значимости проблемы.',
    'Если нужно срочно сделать какое-либо дело, обратись к тому, кто занят больше всех.',
    'Не спеши выполнять приказ — его могут отменить.',
    'Тому, кто сам ничего не делает, все кажется по плечу.',
    'Начальник — это человек, который приходит на службу поздно, когда ты приходишь рано, и появляется чуть свет, когда ты опаздываешь.',
    'Только когда читаешь разъяснение ранее полученной инструкции, догадываешься, что не понял ни самой инструкции, ни разъяснений к ней.',
    'Если отложить дело надолго, то его либо выполнит кто-нибудь другой, либо оно вообще перестанет быть нужным.',
    'Не будь незаменимым — тебя никогда не повысят.',
    'Позади всякого, кто сделал успешную карьеру, стоит озадаченная женщина.',
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
