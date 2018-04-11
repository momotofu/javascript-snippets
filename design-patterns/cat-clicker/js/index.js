const model = {
  init: function() {
    if (!localStorage.model) {
      // populate model with initial data
      seq = new Sequence()
      cats = {}

      cats[seq.get()] = new Cat(seq.get(true), 'cat', 2, 'cat.jpeg'),
      cats[seq.get()] = new Cat(seq.get(true), 'lazy', 0, 'lazy.jpeg'),
      cats[seq.get()] = new Cat(seq.get(true), 'zelda', 0, 'zelda.jpeg'),
      cats[seq.get()] = new Cat(seq.get(true), 'paws', 0, 'paws.jpeg'),
      cats[seq.get()] = new Cat(seq.get(true), 'jumply', 0, 'jumply.jpeg'),
      cats['nextSequence'] = seq.get()

      localStorage.model = JSON.stringify({'cat': cats })
    }
  },
  getAllModels: function(modelName) {
    return JSON.parse(localStorage.model)[modelName]
  },
  getOneModel: function(modelName, id) {
    return JSON.parse(localStorage.model)[modelName][id]
  },
  updateOneModel: function(model) {
    const storage = JSON.parse(localStorage.model)
    const modelName = model.constructor.name.toLowerCase()
    const modelID = model.id

    if (storage[modelName][modelID] != undefined) {
      storage[modelName][model.id] = model
      localStorage.model = JSON.stringify(storage)
    } else {
      console.error(`No model with id of ${modelID}`)
    }
  }
}

const controller = {
  init: function() {
    model.init()
    mainView.init()
    listView.init()
  },
  getAllModels: function(modelName) {
    return model.getAllModels(modelName)
  },
  updateCounterFor: function(modelName, id) {
    
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
