console.log("Connect 4")



function showRules() {
  if (rules.style.display === 'none') {
     rules.style.display = 'flex'
  } else {
    rules.style.display = 'none'
  }
}
const rules = document.querySelector('.rules')
const about = document.querySelector('.about')
about.addEventListener('click', showRules)
rules.style.display = 'none'
