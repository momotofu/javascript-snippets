const model = {
  init: function() {
    if (!localStorage.model) {
      // populate model with initial data
      seq = new Sequence()
      cats = {}

      cats[seq.get()] = new Cat(seq.get(true), 'cat', 2, 'cat.jpeg').serialize(),
      cats[seq.get()] = new Cat(seq.get(true), 'lazy', 0, 'lazy.jpeg').serialize(),
      cats[seq.get()] = new Cat(seq.get(true), 'zelda', 0, 'zelda.jpeg').serialize(),
      cats[seq.get()] = new Cat(seq.get(true), 'paws', 0, 'paws.jpeg').serialize(),
      cats[seq.get()] = new Cat(seq.get(true), 'jumply', 0, 'jumply.jpeg').serialize(),
      cats['nextsequence'] = seq.get()

      localStorage.model = JSON.stringify({'cat': cats })
    }
  },
  getAllObjectsOf: function(objectName) {
    return JSON.parse(localStorage.model)[objectName]
  },
  getOneObject: function(objectName, id) {
    return JSON.parse(localStorage.model)[objectName][id]
  },
  updateOneObject: function(object) {
    const storage = JSON.parse(localStorage.model)
    const modelName = object.constructor.name.toLowerCase()
    const modelID = object.getID()

    if (storage[modelName][modelID] != undefined) {
      storage[modelName][modelID] = object.serialize()
      localStorage.model = JSON.stringify(storage)
    } else {
      console.error(`No model with id of ${modelID}`)
    }
  }
}

const controller = {
  init: function() {
    model.init()
    /*
    mainView.init()
    listView.init()
    */
  },
  getAllObjectsOf: function(objectName) {
    return model.getAllObjectsOf(objectName)
  },
  updateOneObject: function(object) {
    model.updateOneObject(object)
  }
}

const mainView = {
}

const listView = {
}

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
