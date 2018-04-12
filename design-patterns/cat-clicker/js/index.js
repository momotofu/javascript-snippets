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
    this.views = {
      'listView': listView,
      'mainView': mainView
    }

    model.init()
    /*
    mainView.init()
    */
    listView.init()
  },
  getAllObjectsOf: function(objectName) {
    // returns an array of cat objects
    objectDict = model.getAllObjectsOf(objectName)
    objects = []

    for (let key in objectDict) {
      if (!isNaN(parseInt(key))) {
        objects.push(new Cat(objectDict[key]))
      }
    }
    return objects
  },
  updateOneObject: function(object) {
    model.updateOneObject(object)
  },
  renderView: function(viewName) {
    this.views[viewName].render()
  }
}

const mainView = new View({
  init: function() {
    // setup event listeners
  },
  render: function() {
    // update DOM with any new data changes
  }
})

const listView = new View({
  init: function() {
    this.catList = document.getElementsByClassName('cat-list')[0]
    this.render()
  },

  clickEvent: function(context, event) {
    event.preventDefault()
    const dataID = event.target.getAttribute('data-id')

    context.setState({
      selectedID : dataID
    })
    console.log(context.getState())
  },

  render: function() {
    // update DOM with any new data changes
    const selectedID = this.getState().selectedID
    var HTMLString = ''

    controller.getAllObjectsOf('cat').forEach(function(object) {
        HTMLString += `
          <li class="cat-list__item ${selectedID == object.getID() ? 'cat-list__item--selected' : ''}" data-id="${object.getID()}">
            ${object.getName()}
          </li>
        `
    })

    this.catList.innerHTML = HTMLString

    // setup event listeners
    const children = this.catList.children
    for (let key in children) {
      if (!isNaN(key)) {
        child = children[key]
        child.onclick = this.clickEvent.bind(event, this)
      }
    }
  }
})

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

controller.init()
