let contactsButton = document.querySelector('.contacts__button')
let moduleCaalback = document.querySelector('.module-caalback')

let closeModuleCaalback = document.querySelector('.module-caalback')

contactsButton.onclick = function () {
  moduleCaalback.classList.add('module-caalback--show');
}

closeModuleCaalback.onclick = function () {
  moduleCaalback.classList.remove('module-caalback--show');
}

