function getFirstSelector(div) {
  return document.querySelector(div)
}

function nestedTarget(div) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedList = document.getElementById('.ranked-list')
  
  for (let i = 0; i < rankedList.length; i++) {
  rankedList[i].innerHTML = (i + 1).toString()
}
}