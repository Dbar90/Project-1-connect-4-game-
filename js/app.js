console.log("Connect Four")
//DOM Elements:
//Drop Buttons
const dropper = document.querySelectorAll('.drop')
const styleElem = document.head.appendChild(document.createElement('style'))

//About Game Buttons
const rules = document.querySelector('.rules')
const about = document.querySelector('.about')

//Tile Elements
const allTiles = document.querySelectorAll('.tile:not(.drop)')


//Arrays:
//Drop Buttons
const dropperArray = [dropper[0], dropper[1], dropper[2], dropper[3], dropper[4], dropper[5], dropper[6]]

//Rows
const row0 = [allTiles[0], allTiles[1], allTiles[2], allTiles[3], allTiles[4], allTiles[5], allTiles[6]]
const row1 = [allTiles[7], allTiles[8], allTiles[9], allTiles[10], allTiles[11], allTiles[12], allTiles[13]]
const row2 = [allTiles[14], allTiles[15], allTiles[16], allTiles[17], allTiles[18], allTiles[19], allTiles[20]]
const row3 = [allTiles[21], allTiles[22], allTiles[23], allTiles[24], allTiles[25], allTiles[26], allTiles[27]]
const row4 = [allTiles[28], allTiles[29], allTiles[30], allTiles[31], allTiles[32], allTiles[33], allTiles[34]]
const row5 = [allTiles[35], allTiles[36], allTiles[37], allTiles[38], allTiles[39], allTiles[40], allTiles[41]]
const rows = [row0, row1, row2, row3, row4, row5, dropperArray]

//Columns
const column0 = [allTiles[35], allTiles[28], allTiles[21], allTiles[14], allTiles[7], allTiles[0], dropper[0]]
const column1 = [allTiles[36], allTiles[29], allTiles[22], allTiles[15], allTiles[8], allTiles[1], dropper[1]]
const column2 = [allTiles[37], allTiles[30], allTiles[23], allTiles[16], allTiles[9], allTiles[2], dropper[2]]
const column3 = [allTiles[38], allTiles[31], allTiles[24], allTiles[17], allTiles[10], allTiles[3], dropper[3]]
const column4 = [allTiles[39], allTiles[32], allTiles[25], allTiles[18], allTiles[11], allTiles[4], dropper[4]]
const column5 = [allTiles[40], allTiles[33], allTiles[26], allTiles[19], allTiles[12], allTiles[5], dropper[5]]
const column6 = [allTiles[41], allTiles[34], allTiles[27], allTiles[20], allTiles[13], allTiles[6], dropper[6]]
const columns = [column0, column1, column2, column3, column4, column5, column6]

//Functions
const getClassListArray = (tile) => {
    const classList = tile.classList
    return [...classList]
}

const getTileLocation = (tile) => {
    const classList = getClassListArray(tile)
    const rowClass = classList.find(className => className.includes('row'))
    const colClass = classList.find(className => className.includes('col'))
    const rowIndex = rowClass[4]
    const colIndex = colClass[4]
    const rowNumber = parseInt(rowIndex, 10)
    const colNumber = parseInt(colIndex, 10)
    return [rowNumber, colNumber]
}


const firstTileCol = (colIndex) => {
  const column = columns[colIndex]
  const columnWithoutDrop = column.slice(0, 6)
  console.log(columnWithoutDrop)
  for (const tile of column) {
    const classList = getClassListArray(tile)
    if (!classList.includes('yellow') && !classList.includes('red')) {
        return tile
    }
  }
  return null
}

const handleTileDropper = (e) => {
  const tile = e.target
  const [rowIndex, colIndex] = getTileLocation(tile)
  const openTile = firstTileCol(colIndex)
  console.log()
}

const handleTileMouseOver = (e) => {
  const tile = e.target
  const [rowIndex, colIndex] = getTileLocation(tile)
}



for (const row of rows) {
  for (const tile of row) {
    tile.addEventListener('mouseover', handleTileMouseOver)
  }
}






//Event Listeners:
//Drop Buttons
for (const dropper of dropperArray) {
  dropper.addEventListener('mouseover', ()=> {
    styleElem.innerHTML = '.drop:hover:after {background: red;}'
  })
  dropper.addEventListener('mouseout', ()=> {
    styleElem.innerHTML = '.drop:hover:after {background: white;}'
  })
}

for (const dropper of dropperArray) {
  for (const row of rows) {
    for (const tile of row) {
      dropper.addEventListener('click', handleTileDropper)
    }
  }
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
