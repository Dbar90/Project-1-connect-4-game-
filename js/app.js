console.log("Connect Four")

const dropper = document.querySelectorAll('.drop-button')
const dropperArray = [dropper[0], dropper[1], dropper[2], dropper[3], dropper[4], dropper[5], dropper[6]]

const rules = document.querySelector('.rules')
const about = document.querySelector('.about')

function dropperColor(e) {
  const button = e.target
  button.style.background = 'red'
}

function dropperReturn(e) {
  const button = e.target
  button.style.background = 'royalblue'
}

for (const dropper of dropperArray) {
  dropper.addEventListener('mouseover', dropperColor)
  dropper.addEventListener('mouseout', dropperReturn)
}

function showRules() {
  if (rules.style.display === 'none') {
     rules.style.display = 'flex'
  } else {
    rules.style.display = 'none'
  }
}

about.addEventListener('click', showRules)
rules.style.display = 'none'
