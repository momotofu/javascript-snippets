class Cat {
  constructor(id, name, clickCount, imageName) {
    // properties
    const catID = id
    var catName = name
    var catClickCount = clickCount
    var catImageName = `img/${imageName}`

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
