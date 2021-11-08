document.querySelector('.contacts__button').onclick = function () {
  document.querySelector('.module-caalback').classList.add('module-caalback--show');
}

document.querySelector('.module-caalback__close-button').onclick = function () {
  document.querySelector('.module-caalback').classList.remove('module-caalback--show');
}

