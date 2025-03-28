document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('toggleText')
  const hud = document.getElementById('textContainer')

  text.addEventListener('click', () => {
    hud.classList.toggle('hidden')
  })
})

function goToPage(page) {
  window.location.href = page // Перенаправление на другую страницу
}
