document.getElementById('cat-image-container')
  .addEventListener('click', function() {
    this.classList.add('buzz-out')
    el = document.getElementById('number-of-clicks')
    elCount = parseInt(el.innerText)
    el.innerText =  elCount ? elCount + 1 : 1
  })


