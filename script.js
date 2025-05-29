const changeButton = document.getElementById('change_button')
const resetButton = document.getElementById('Reset')

changeButton.addEventListener('click', () => {
  const blockId = document.getElementById('block_id').value
  const colour = document.getElementById('colour_id').value
  const items = document.querySelectorAll('.grid-item')

  items.forEach(item => {
    item.style.backgroundColor = 'transparent'
  })

  const selected = document.getElementById(blockId)
  if (selected) {
    selected.style.backgroundColor = colour
  }
})

resetButton.addEventListener('click', () => {
  const items = document.querySelectorAll('.grid-item')
  items.forEach(item => {
    item.style.backgroundColor = 'transparent'
  })
})
