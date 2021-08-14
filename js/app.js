console.log("Connect Four")
//DOM Elements:
//Drop Buttons
const dropper = document.querySelectorAll('.drop-button')
const styleElem = document.head.appendChild(document.createElement('style'))

//About Game Buttons
const rules = document.querySelector('.rules')
const about = document.querySelector('.about')

//Tile Elements
const allTiles = document.querySelectorAll('.tile')

//Arrays:
//Drop Buttons
const dropperArray = [dropper[0], dropper[1], dropper[2], dropper[3], dropper[4], dropper[5], dropper[6]]

//Rows
const row0 = allTiles[0], allTiles[1], allTiles[2], allTiles[3], allTiles[4], allTiles[5], allTiles[6]
const row1 = allTiles[7], allTiles[8], allTiles[9], allTiles[10], allTiles[11], allTiles[12], allTiles[13]
const row2 = allTiles[14], allTiles[15], allTiles[16], allTiles[17], allTiles[18], allTiles[19], allTiles[20]
const row3 = allTiles[21], allTiles[22], allTiles[23], allTiles[24], allTiles[25], allTiles[26], allTiles[27]
const row4 = allTiles[28], allTiles[29], allTiles[30], allTiles[31], allTiles[32], allTiles[33], allTiles[34]
const row5 = allTiles[35], allTiles[36], allTiles[37], allTiles[38], allTiles[39], allTiles[40], allTiles[41]
const rows = [row0, row1, row2, row3, row4, row5]

//Columns
const column0 = allTiles[35], allTiles[28], allTiles[21], allTiles[14], allTiles[7], allTiles[0]
const column1 = allTiles[36], allTiles[29], allTiles[22], allTiles[15], allTiles[8], allTiles[1]
const column2 = allTiles[37], allTiles[30], allTiles[23], allTiles[16], allTiles[9], allTiles[2]
const column3 = allTiles[38], allTiles[31], allTiles[24], allTiles[17], allTiles[10], allTiles[3]
const column4 = allTiles[39], allTiles[32], allTiles[25], allTiles[18], allTiles[11], allTiles[4]
const column5 = allTiles[40], allTiles[33], allTiles[26], allTiles[19], allTiles[12], allTiles[5]
const column6 = allTiles[41], allTiles[34], allTiles[27], allTiles[20], allTiles[13], allTiles[6]










//Event Listeners:
//Drop Buttons
for (const dropper of dropperArray) {
  dropper.addEventListener('mouseover', (e)=> {
    styleElem.innerHTML = '.drop-button:hover:after {background: red;}'
  })
  dropper.addEventListener('mouseout', (e)=> {
    styleElem.innerHTML = '.drop-button:hover:after {background: white;}'
  })
}

//About Game Button
about.addEventListener('click', ()=> {
  if (rules.style.display === 'none') {
     rules.style.display = 'flex'
  } else {
    rules.style.display = 'none'
  }
})
rules.style.display = 'none'
