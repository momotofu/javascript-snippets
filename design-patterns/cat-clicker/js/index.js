document.getElementById('cat-image-container')
  .addEventListener('click', function() {
    if (this.classList.contains('buzz-out')) {
      this.classList.remove('buzz-out').add('buzz-out')
    } else {
      this.classList.add('buzz-out')
    }
    el = document.getElementById('number-of-clicks')
    elCount = parseInt(el.innerText)
    el.innerText =  elCount ? elCount + 1 : 1
  })


