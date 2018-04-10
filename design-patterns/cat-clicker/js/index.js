// State
var selectedCat = 'cat'

/*
data['cat'] = new Cat('cat', 2, 'cat.jpeg')
data['lazy'] = new Cat('lazy', 0, 'lazy.jpeg')
data['curious'] = new Cat('curious', 0, 'curious.jpeg')
data['zelda'] = new Cat('zelda', 0, 'zelda.jpeg')
data['paws'] = new Cat('paws', 0, 'paws.jpeg')
data['jumply'] = new Cat('jumply', 0, 'jumply.jpeg')
*/

// Page data
const model = {
  init: function() {
    if (!localStorage.model) {
      // populate model with initial data
      localStorage.model = JSON.stringify([
        new Cat('cat', 2, 'cat.jpeg'),
        new Cat('lazy', 0, 'lazy.jpeg'),
        new Cat('zelda', 0, 'zelda.jpeg'),
        new Cat('paws', 0, 'paws.jpeg'),
        new Cat('jumply', 0, 'jumply.jpeg')
      ])
    }
  }
}

model.init()

// Add click event listeners for cat data
const catListItems = document.getElementsByClassName('cat-list__item')
for (let key in catListItems) {
  if (!isNaN(parseInt(key))) {
    catListItems[key].addEventListener('click', function() {
      updateSelectedCat(this.id)
      updateMainImage(this.id)
      updateCounterFor(this.id)
    })
  }
}

function updateSelectedCat(catName) {
  selectedCat = catName
  for (let key in catListItems) {
    if (!isNaN(parseInt(key))) {
      const cur = catListItems[key]
      if (cur.id == catName) {
        cur.classList.remove("cat-list__item--selected")
        cur.className += " cat-list__item--selected"
      } else {
        cur.classList.remove("cat-list__item--selected")
      }
    }
  }
}


function updateMainImage(catName) {
  const heroContainer = document.getElementsByClassName('hero-container')[0]
  for (var key in heroContainer.children) {
    if (!isNaN(parseInt(key))) {
      const currentEl = heroContainer.children[key]
      if (currentEl.localName == 'img') {
        currentEl.src = catData[catName].imageName
      }
    }
  }
}

function updateCounterFor(catName) {
  const counterEl = document.getElementById('number-of-clicks')
  counterEl.innerHTML = catData[catName].clickCount
}

const catContainerList = document.getElementsByClassName('hero-container')

for (let key in catContainerList) {
  if (!isNaN(parseInt(key))) {
    catContainerList[key].addEventListener('mousedown', function() {
      const list = this.classList
      list.add('buzz-out')
      counterEl = document.getElementById('number-of-clicks')
      currentCount = parseInt(counterEl.innerText)
      counterEl.innerText =  currentCount ? currentCount + 1 : 1
      catData[selectedCat].clickCount = counterEl.innerText
    })

    catContainerList[key].addEventListener('mouseup', function() {
      const list = this.classList
      list.remove('buzz-out')
    })
  }
}
