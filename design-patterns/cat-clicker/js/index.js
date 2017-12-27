const catContainerList = document.getElementsByClassName('hero-container')

for (var key in catContainerList) {
  catContainerList[key].addEventListener('mousedown', function() {
    const list = this.classList
    list.add('buzz-out')
    el = document.getElementById('number-of-clicks')
    elCount = parseInt(el.innerText)
    el.innerText =  elCount ? elCount + 1 : 1
  })

  catContainerList[key].addEventListener('mouseup', function() {
    const list = this.classList
    list.remove('buzz-out')
    console.log('mouseup')
  })
}
