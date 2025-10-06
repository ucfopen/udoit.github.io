const root = document.documentElement
const toggle = document.getElementById('dark-mode-toggle')

// If the user has a saved preference, use it
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
  toggle.checked = true
  root.classList.add('dark')
} else if (savedTheme === 'light') {
  toggle.checked = false
  root.classList.add('light')
// If no saved preference, check to see if the user prefers dark mode
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggle.checked = true
  root.classList.add('dark')
}

// Toggle theme and store preference
toggle.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark')
  root.classList.toggle('dark', isDark)
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
})