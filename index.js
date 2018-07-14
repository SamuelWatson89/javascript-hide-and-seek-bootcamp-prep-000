function getFirstSelector(div) {
  return document.querySelector(div)
}

function nestedTarget(div) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li')
}