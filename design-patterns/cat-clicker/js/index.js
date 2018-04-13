(function() {

/**
 * model
 */

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

  getOneObjectOf: function(objectName, id) {
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

/**
 * controller
 */

const controller = {
  init: function() {
    this.views = {
      'listView': listView,
      'mainView': mainView
    }

    model.init()
    mainView.init()
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

  getOneObjectOf: function(objectName, id) {
    return new Cat(model.getOneObjectOf(objectName, id))
  },

  updateOneObject: function(object) {
    model.updateOneObject(object)
  },

  renderView: function(viewName, data) {
    const view = this.views[viewName]
    view.props.data = data
    view.render()
  }
}

/**
 * views
 */

const mainView = new View({
  init: function() {
    this.figure = document.getElementsByClassName('hero-container')[0]
    this.props.data = controller.getAllObjectsOf('cat')[0]
    this.render()

    // add event listener
    const cat = this.props.data
    this.figure.onclick = this.clickEvent.bind(event, cat.getID(), this)
  },

  clickEvent: function(id, context, event) {
    event.preventDefault()

    const cat = context.props.data
    const clickCount = cat.setClickCount(cat.getClickCount() + 1)
    controller.updateOneObject(cat)

    const clickCounter = document.getElementById('number-of-clicks')
    clickCounter.innerText = clickCount
  },

  render: function() {
    const cat = this.props.data

    this.figure.innerHTML = `
      <img class="hero-image" src="${cat.getImageName()}" alt="a cute and fury kitten">
      <figcaption>
        <p>
          the total number if clicks is <span class="number-of-clicks" id="number-of-clicks">${cat.getClickCount()}</span>
        </p>
      </figcaption>
    `
  }
})

const listView = new View({
  init: function() {
    this.catList = document.getElementsByClassName('cat-list')[0]
    this.render()

    // setup event listeners
    const children = this.catList.children
    for (let key in children) {
      if (!isNaN(key)) {
        child = children[key]
        child.onclick = this.clickEvent.bind(event, this)
      }
    }
  },

  onChange: function() {
    const children = this.catList.children
    const selectedID = this.getState().selectedID
    const selectedClassName = 'cat-list__item--selected'

    for (let key in children) {
      if (!isNaN(key)) {
        const child = children[key]
        if (child.getAttribute('data-id') != selectedID) {
          child.classList.remove(selectedClassName)
        } else {
          child.classList.add(selectedClassName)
        }
      }
    }
  },

  clickEvent: function(context, event) {
    event.preventDefault()
    const dataID = event.target.getAttribute('data-id')

    context.setState({
      selectedID : dataID
    })

    const cat = controller.getOneObjectOf('cat', dataID)
    controller.renderView('mainView', cat)
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
  }
})

const adminView = new View({
  init: function() {
    this.setState({
      isClosed : true
    })

    this.adminButton = document.getElementById('adminButton')
    this.adminPanel = document.getElementsByClassName('admin__panel')[0]
  },

  onChange: function() {
  },

  animateAdminPanel: function() {
  },

  adminButtonClick: function(event, context) {
    event.preventDefault()
    this.setState({
      isClosed : !context.getState().isClosed
    })
  },

  render: function() {
  }
})

controller.init()
})()
