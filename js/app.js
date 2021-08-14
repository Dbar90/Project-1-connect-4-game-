console.log("Connect Four")

const dropper = document.querySelectorAll('.drop-button')
const dropperArray = [dropper[0], dropper[1], dropper[2], dropper[3], dropper[4], dropper[5], dropper[6]]
const styleElem = document.head.appendChild(document.createElement('style'))

const rules = document.querySelector('.rules')
const about = document.querySelector('.about')

// function dropperColor() {
//   styleElem.innerHTML = '.drop-button:after {background: red;}'
// }



for (const dropper of dropperArray) {
  console.log(dropper)
  dropper.addEventListener('mouseover', (e)=> {
    styleElem.innerHTML = '.drop-button:hover:after {background: red;}'
  })
  dropper.addEventListener('mouseout', (e)=> {
    styleElem.innerHTML = '.drop-button:hover:after {background: white;}'
  })
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
