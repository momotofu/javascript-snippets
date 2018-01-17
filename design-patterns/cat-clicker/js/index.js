// udate image
const catListItems = document.getElementsByClassName('cat-list__item')

// set up click action for list
for (let key in catListItems) {
  if (!isNaN(parseInt(key))) {
    catListItems[key].addEventListener('click', function() {
      console.log("this: ", this)
      updateMainImage(sup)
    })
  }
}

function updateMainImage(catName) {
  const heroContainer = document.getElementsByClassName('hero-container')[0]
  console.log("heroContainer: ", heroContainer)
}

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
