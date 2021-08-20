console.log("Connect Four")
//DOM Elements:
//Drop Buttons
const dropper = document.querySelectorAll('.tile.row-top')
const styleElem = document.head.appendChild(document.createElement('style'))

//About Game Buttons
const rules = document.querySelector('.rules')
const about = document.querySelector('.about')

//Status and New Game Button
const status = document.querySelector('.status')
const newGame = document.querySelector('.newgame')

//Tile Elements
const allTiles = document.querySelectorAll('.tile:not(.row-top)')


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

let gameIsLive = false
let yellowIsNext = true

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

const firstOpenTileCol = (colIndex) => {
  const column = columns[colIndex]
  const columnWithoutDrop = column.slice(0, 6)
  for (const tile of columnWithoutDrop) {
    const classList = getClassListArray(tile)
    if (!classList.includes('yellow') && !classList.includes('red')) {
        return tile
    }
  }
  return null
}

const getColorOfTile = (tile) => {
  const classList = getClassListArray(tile)
  if (classList.includes('yellow')) {
    return 'yellow'
  }
  if (classList.includes('red')) {
    return 'red'
}
  return null
}

const checkWinningTiles = (tiles) => {
  if (tiles.length < 4) return false
    gameIsLive = false
    for (const tile of tiles) {
    tile.classList.add('win')
    if (yellowIsNext) {
      status.innerHTML = 'Yellow has won!'
    } else {
      status.innerHTML = 'Red has won!'
    }
  }
  return true
}

const checkStatusOfGame = (tile) => {
  const color = getColorOfTile(tile)
  if (!color) return
  const [rowIndex, colIndex] = getTileLocation(tile)
  let winningTiles = [tile]
  let rowToCheck = rowIndex
  let colToCheck = colIndex - 1
  while (colToCheck >= 0) {
    const tileToCheck = rows[rowToCheck][colToCheck]
    if (getColorOfTile(tileToCheck) === color) {
      winningTiles.push(tileToCheck)
      colToCheck--
    } else {
      break
    }
  }
  colToCheck = colIndex + 1
  while (colToCheck <= 6) {
    const tileToCheck = rows[rowToCheck][colToCheck]
    if (getColorOfTile(tileToCheck) === color) {
      winningTiles.push(tileToCheck)
      colToCheck++
    } else {
      break
    }
  }
  let fourInARow = checkWinningTiles(winningTiles)
  if (fourInARow) return
  winningTiles = [tile]
  rowToCheck = rowIndex -1
  colToCheck = colIndex
  while (rowToCheck >= 0) {
    const tileToCheck = rows[rowToCheck][colToCheck]
    if (getColorOfTile(tileToCheck) === color) {
      winningTiles.push(tileToCheck)
      rowToCheck--
    } else {
      break
    }
  }
  rowToCheck = rowIndex + 1
  while (rowToCheck <= 5) {
    const tileToCheck = rows[rowToCheck][colToCheck]
    if (getColorOfTile(tileToCheck) === color) {
      winningTiles.push(tileToCheck)
      rowToCheck++
    } else {
      break
    }
  }
  fourInARow = checkWinningTiles(winningTiles)
  if (fourInARow) return

}



const clearColorFromButton = (colIndex) => {
  const dropper = dropperArray[colIndex]
  dropper.classList.remove('yellow')
  dropper.classList.remove('red')
}




const handleTileDropper = (e) => {
  if (!gameIsLive) return
  const tile = e.target
  const [rowIndex, colIndex] = getTileLocation(tile)
  const openTile = firstOpenTileCol(colIndex)
  if (!openTile) return
  if (yellowIsNext) {
    openTile.classList.add('yellow')
  } else {
    openTile.classList.add('red')
  }
  checkStatusOfGame(openTile)
  yellowIsNext = !yellowIsNext
  clearColorFromButton(colIndex)
  if (gameIsLive) {
    const dropper = dropperArray[colIndex]
    if (yellowIsNext) {
      dropper.classList.add('yellow')
  } else {
      dropper.classList.add('red')
    }
  }
}

const buttonMouseOver = (e) => {
  if (!gameIsLive) return
  const tile = e.target
  const [rowIndex, colIndex] = getTileLocation(tile)
  const dropper = dropperArray[colIndex]
  if (yellowIsNext) {
    dropper.classList.add('yellow')
  } else {
    dropper.classList.add('red')
  }
}

buttonMouseOut = (e) => {
  const tile = e.target
  const [rowIndex, colIndex] = getTileLocation(tile)
  const dropper = dropperArray[colIndex]
  dropper.classList.remove('yellow')
  dropper.classList.remove('red')
}

//Event Listeners:
// Drop Buttons
for (const dropper of dropperArray) {
  dropper.addEventListener('mouseover', buttonMouseOver)
  dropper.addEventListener('mouseout', buttonMouseOut)
  dropper.addEventListener('click', handleTileDropper)
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

//New Game Button
newGame.addEventListener('click', ()=> {
  for (const row of rows) {
    for (const tile of row) {
    tile.classList.remove('yellow')
    tile.classList.remove('red')
    tile.classList.remove('win')
    }
  }
  gameIsLive = true
  yellowIsNext = true
  status.innerHTML = ''
})
