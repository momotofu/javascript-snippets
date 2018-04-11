class Cat {
  constructor(id, name, clickCount, imageName) {
    /* content is an optional dictionary used
     * to populate properites
     */

    // properties
    var catID
    var catName
    var catClickCount
    var catImageName

    if (!typeof(id) === "object") {
      catID = id
      catName = name
      catClickCount = clickCount
      catImageName = `img/${imageName}`
    } else {
      const content = id
      catID = content['id']
      catName = content['name']
      catClickCount = content['clickCount']
      catImageName = content['imageName']
    }

    // getters
    this.getID = function() {
      return catID
    }
    this.getName = function() {
      return catName
    }
    this.getClickCount = function() {
      return catClickCount
    }
    this.getImageName = function() {
      return catImageName
    }

    // setters
    this.setName = function(name = catName) {
      catName = name
    }
    this.setClickCount = function(count = catClickCount) {
      catClickCount = count
    }
    this.setImageName = function(imageName = catImageName) {
      catImageName = imageName
    }

    // methods
    this.serialize = function() {
      return {
        id : this.getID(),
        name : this.getName(),
        imageName : this.getImageName(),
        clickCount : this.getClickCount()
      }
    }
  }
}

class Sequence {
  constructor(current = 0) {
    var currentIteration = current
    this.up = function() {
      currentIteration += 1
    }
    this.get = function(shouldUp) {
      if (shouldUp) {
        this.up()
        return (currentIteration - 1)
      } else {
        return currentIteration
      }
    }
  }
}
