class Cat {
  constructor(id, name, clickCount, imageName) {
    this.id = id
    this.name = name
    this.clickCount = clickCount
    this.imageName = `img/${imageName}`
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
