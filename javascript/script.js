document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('toggleText')
  const hud = document.getElementById('textContainer')

  text.addEventListener('click', () => {
    hud.classList.toggle('hidden')
  })
})

function goToPage(page) {
  window.location.href = page
}

document.getElementById('back').addEventListener('click', function () {
  window.location.href = 'index.html'
})
