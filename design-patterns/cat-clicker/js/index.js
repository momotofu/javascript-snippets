const catContainerList = document.getElementsByClassName('hero-container')

for (let key in catContainerList) {
  if (!isNaN(parseInt(key))) {
    catContainerList[key].addEventListener('mousedown', function() {
      const list = this.classList
      list.add('buzz-out')
      counterTextEl = document.getElementById(`number-of-clicks-${key}`)
      currentCount = parseInt(counterTextEl.innerText)
      counterTextEl.innerText =  currentCount ? currentCount + 1 : 1
    })

    catContainerList[key].addEventListener('mouseup', function() {
      const list = this.classList
      list.remove('buzz-out')
    })
  }
}
