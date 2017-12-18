document.getElementById('cat-image-container')
  .addEventListener('click', () => {
    el = document.getElementById('number-of-clicks')
    elCount = parseInt(el.innerText)
    el.innerText =  elCount ? elCount + 1 : 1
  })


