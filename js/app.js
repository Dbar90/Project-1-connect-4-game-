console.log("Connect Four")
//DOM Elements:
//Drop Buttons
const dropper = document.querySelectorAll('.tile.row-top')

//About Game Button/Rules Div
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

const game = {
gameIsLive:false,
yellowIsNext:true,


  getClassListArray(tile) {
    const classList = tile.classList
    return [...classList]
  },

  getTileLocation(tile) {
    const classList = game.getClassListArray(tile)
    const rowClass = classList.find(className => className.includes('row'))
    const colClass = classList.find(className => className.includes('col'))
    const rowIndex = rowClass[4]
    const colIndex = colClass[4]
    const rowNumber = parseInt(rowIndex, 10)
    const colNumber = parseInt(colIndex, 10)
    return [rowNumber, colNumber]
  },

  firstOpenTileCol(colIndex) {
    const column = columns[colIndex]
    const columnWithoutDrop = column.slice(0, 6)
    for (const tile of columnWithoutDrop) {
      const classList = game.getClassListArray(tile)
      if (!classList.includes('yellow') && !classList.includes('red')) {
        return tile
      }
    }
    return null
  },

  getColorOfTile(tile) {
    const classList = game.getClassListArray(tile)
    if (classList.includes('yellow')) {
      return 'yellow'
    }
    if (classList.includes('red')) {
      return 'red'
    }
      return null
  },

  checkWinningTiles(tiles) {
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
  },

  checkStatusOfGame(tile) {
    const color = game.getColorOfTile(tile)
    if (!color) return
    const [rowIndex, colIndex] = game.getTileLocation(tile)
    let winningTiles = [tile]
    let rowToCheck = rowIndex
    let colToCheck = colIndex - 1
    while (colToCheck >= 0) {
      const tileToCheck = rows[rowToCheck][colToCheck]
      if (game.getColorOfTile(tileToCheck) === color) {
        winningTiles.push(tileToCheck)
        colToCheck--
      } else {
        break
      }
    }
    colToCheck = colIndex + 1
    while (colToCheck <= 6) {
      const tileToCheck = rows[rowToCheck][colToCheck]
      if (game.getColorOfTile(tileToCheck) === color) {
        winningTiles.push(tileToCheck)
        colToCheck++
      } else {
        break
      }
    }
    let fourInARow = game.checkWinningTiles(winningTiles)
    if (fourInARow) return

    winningTiles = [tile]
    rowToCheck = rowIndex - 1
    colToCheck = colIndex
    while (rowToCheck >= 0) {
      const tileToCheck = rows[rowToCheck][colToCheck]
      if (game.getColorOfTile(tileToCheck) === color) {
        winningTiles.push(tileToCheck)
        rowToCheck--
      } else {
        break
      }
    }
    rowToCheck = rowIndex + 1
    while (rowToCheck <= 5) {
      const tileToCheck = rows[rowToCheck][colToCheck]
      if (game.getColorOfTile(tileToCheck) === color) {
        winningTiles.push(tileToCheck)
        rowToCheck++
      } else {
        break
      }
    }
    fourInARow = game.checkWinningTiles(winningTiles)
    if (fourInARow) return

    winningTiles = [tile]
    rowToCheck = rowIndex + 1
    colToCheck = colIndex - 1
    while (colToCheck >= 0 && rowToCheck <= 5) {
      const tileToCheck = rows[rowToCheck][colToCheck]
      if (game.getColorOfTile(tileToCheck) === color) {
        winningTiles.push(tileToCheck)
        rowToCheck++
        colToCheck--
      } else {
        break
      }
    }
    rowToCheck = rowIndex - 1
    colToCheck = colIndex + 1
    while (colToCheck <= 6 && rowToCheck >= 0) {
      const tileToCheck = rows[rowToCheck][colToCheck]
      if (game.getColorOfTile(tileToCheck) === color) {
        winningTiles.push(tileToCheck)
        rowToCheck--
        colToCheck++
      } else {
        break
      }
    }
    fourInARow = game.checkWinningTiles(winningTiles)
    if (fourInARow) return

    winningTiles = [tile]
    rowToCheck = rowIndex - 1
    colToCheck = colIndex - 1
    while (colToCheck >= 0 && rowToCheck >= 0) {
      const tileToCheck = rows[rowToCheck][colToCheck]
      if (game.getColorOfTile(tileToCheck) === color) {
        winningTiles.push(tileToCheck)
        rowToCheck--
        colToCheck--
      } else {
        break
      }
    }
    rowToCheck = rowIndex + 1
    colToCheck = colIndex + 1
    while (colToCheck <= 6 && rowToCheck <= 5) {
      const tileToCheck = rows[rowToCheck][colToCheck]
      if (game.getColorOfTile(tileToCheck) === color) {
        winningTiles.push(tileToCheck)
        rowToCheck++
        colToCheck++
      } else {
        break
      }
    }
    fourInARow = game.checkWinningTiles(winningTiles)
    if (fourInARow) return

    const rowsWithOutTop = rows.slice(0, 6)
    for (const row of rowsWithOutTop) {
      for (const tile of row) {
        const classList = game.getClassListArray(tile)
        if (!classList.includes('yellow') && !classList.includes('red')) {
          return
        }
      }
    }
    gameIsLive = false
    status.innerHTML = 'Game is a tie!'
  },



  clearColorFromButton(colIndex) {
    const dropper = dropperArray[colIndex]
    dropper.classList.remove('yellow')
    dropper.classList.remove('red')
  },

  playerTurn() {
    if (gameIsLive)
    if (yellowIsNext) {
      status.innerHTML = "It is yellow player's turn!"
    } else {
      status.innerHTML = "It is red player's turn!"
    }
  },



  handleTileDropper(e) {
    if (!gameIsLive) return
    const tile = e.target
    const [rowIndex, colIndex] = game.getTileLocation(tile)
    const openTile = game.firstOpenTileCol(colIndex)
    if (!openTile) return
    if (yellowIsNext) {
      openTile.classList.add('yellow')
    } else {
      openTile.classList.add('red')
    }
    game.checkStatusOfGame(openTile)
    yellowIsNext = !yellowIsNext
    game.clearColorFromButton(colIndex)
    if (gameIsLive) {
      game.playerTurn()
      const dropper = dropperArray[colIndex]
      if (yellowIsNext) {
        dropper.classList.add('yellow')
      } else {
          dropper.classList.add('red')
      }
    }
  },

  buttonMouseOver(e) {
    if (!gameIsLive) return
    const tile = e.target
    const [rowIndex, colIndex] = game.getTileLocation(tile)
    const dropper = dropperArray[colIndex]
    if (yellowIsNext) {
      dropper.classList.add('yellow')
    } else {
      dropper.classList.add('red')
    }
  },

  buttonMouseOut(e) {
    const tile = e.target
    const [rowIndex, colIndex] = game.getTileLocation(tile)
    const dropper = dropperArray[colIndex]
    dropper.classList.remove('yellow')
    dropper.classList.remove('red')
  }
}
//Event Listeners:
// Drop Buttons
const dropButtons = () => {
  if (gameIsLive)
  for (const dropper of dropperArray) {
    dropper.addEventListener('mouseover', game.buttonMouseOver)
    dropper.addEventListener('mouseout', game.buttonMouseOut)
    dropper.addEventListener('click', game.handleTileDropper)
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
  game.playerTurn()
  dropButtons()
})
