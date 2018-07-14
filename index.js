function getFirstSelector(div) {
  return document.querySelector(div)
}

function nestedTarget(div) {
  return document.querySelector('div#nested div div div.target')
}