const food = {
  init: function (type) {
    this.type = type
  },
  eat: function() {
    console.log('you ate the ' + this.type)
  }
}

const waffle = Object.create(food)
const carrot = Object.create(food)

waffle.init('waffle')
waffle.eat()
food.type = 'apple'
waffle.eat()

carrot.init('carrot')
carrot.eat()
