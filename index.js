function getFirstSelector(div) {
  return document.querySelector(div)
}

function nestedTarget(div) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  document.getElementById('app').querySelectorAll('ul.ranked-list li')
}